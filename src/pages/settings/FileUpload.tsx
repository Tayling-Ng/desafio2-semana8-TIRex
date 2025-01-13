import React, { useCallback, useState } from 'react';
import { Upload, Trash2 } from 'lucide-react';

interface FileUploadProps {
  onFileSelected: (file: File) => void;
  maxSize?: number;
  acceptedFileTypes?: string[];
}

const FileUpload = ({ 
  onFileSelected, 
  maxSize = 5 * 1024 * 1024 * 1024,
  acceptedFileTypes = ['image/jpeg', 'image/png', 'image/webp']
}: FileUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const validateFile = useCallback((file: File): boolean => {
    setError('');

    if (!acceptedFileTypes.includes(file.type)) {
      setError('Invalid file type');
      return false;
    }

    if (file.size > maxSize) {
      setError(`File size must be less than ${maxSize / 1024 / 1024 / 1024}GB`);
      return false;
    }

    return true;
  }, [acceptedFileTypes, maxSize]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file && validateFile(file)) {
      setSelectedFile(file);
      onFileSelected(file);
    }
  }, [onFileSelected, validateFile]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validateFile(file)) {
      setSelectedFile(file);
      onFileSelected(file);
    }
  }, [onFileSelected, validateFile]);

  return (
    <div className="w-full max-w-md tablet:w-410px pb-4">
      <div className="relative">
        {selectedFile && (
          <div className="mb-4 flex bg-blue-50 rounded-lg border border-blue-400 p-2">
            <div className='flex items-center'>
              <svg 
                className="w-5 h-5 text-gray-400 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
              <span className="text-sm text-gray-600 truncate">
                {selectedFile.name}
              </span>
            </div>
            <button
              onClick={() => setSelectedFile(null)}
              className="p-1 hover:bg-blue-200 rounded-lg transition-colors ml-auto"
              aria-label="Remove file"
            >
              <Trash2 className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        )}
        
        <input
          type="file"
          className="hidden"
          accept={acceptedFileTypes.join(',')}
          onChange={handleChange}
          id="file-upload"
        />
        
        <label
          htmlFor="file-upload"
          className={`flex flex-col items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-dashed rounded-lg ${
            dragActive 
              ? 'border-blue-400 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-8 h-8 mb-3 text-gray-400" />
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold text-base">Drop here to attach or{' '}</span>
              <span className="text-indigo-600 text-base">upload</span>
            </p>
            <p className="text-xs text-gray-500">
              Max size: {maxSize / 1024 / 1024 / 1024}GB
            </p>
          </div>
        </label>
        
        {error && (
          <p className="mt-2 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default FileUpload;