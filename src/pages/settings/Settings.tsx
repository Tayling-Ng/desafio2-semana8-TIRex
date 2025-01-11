import FileUpload from "./FileUpload";


const Settings = () => {
  function handleFileSelected(): void {
    throw new Error("Function not implemented.");
  }

  return (
        <div className="font-roboto">
          {/* header  */}
          <nav className="bg-slate-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold">Project Manager</h1>
            </div>
          </nav>
    
          {/* Main Content */}
          <div className="container mx-auto my-8 p-6 rounded-lg">
            {/* Profile section */}
            <div className="flex items-center gap-2 pb-10">
              <img
                src="src\assets\react.svg"
                alt="Profile"
                className="rounded-full h-119.89px w-115.36px md:h-182px md:w-174.16px"
              />
              <div>
                <h1 className="text-4xl font-medium md:text-5xl">John Doe</h1>
                <p className="text-gray-500 text-xl md:text-2xl">john.doe@example.com</p>
              </div>
            </div>
            <div>
              <div className="border-b-2 border-gray-300 pb-4 ">
                <h1 className="text-3xl font-medium">Project Profile</h1>
                <p className="text-neutral-500 text-sm md:text-base ">Update your profile information in the sections below</p>
              </div>
            </div>
    
            {/* Basic info section */}
            <div className="border-b-2 border-gray-300 pt-2 lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="bg-blue md:w-401px">
                <h2 className="text-xl font-medium">Basic Information</h2> 
                <p className="text-sm mb-6 text-neutral-500 text-left leading-9">Update your name and e-mail in this section. Note: this information will be public to all your project colleagues and can be changed anytime</p>
              </div> 
                <form className="md:grid md:grid-cols-2  gap-4  lg:py-6">
                    <div className="md:col-span-1 mb-4"> 
                        <label className="block text-sm font-semibold mb-2">First Name</label> 
                        <input type="text" id="first-name" placeholder="New first name" className="w-full text-sm px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input> 
                    </div>
                    <div className="md:col-span-1 mb-4">
                        <label className="block text-sm font-semibold mb-2">Last name</label>
                        <input type="text" id="last-name" placeholder="New last name" className="w-full text-sm px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input> 
                    </div> 
                    <div className="md:col-span-2 mb-4"> 
                      <label className="block text-sm font-semibold mb-2">E-mail</label> 
                      <input type="email" id="email" placeholder="New e-mail" className="w-full text-sm px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
                    </div> 
                </form> 
            </div>
            {/* Profile Picture Section */}
            <div className="bg-white pt-3 rounded-lg md:h-417px lg:grid lg:grid-cols-2 lg:gap-4 lg:h-300.5px"> 
              <div className="md:w-401px md:h-109px pb-4">
                <h2 className="text-xl font-medium">Profile picture</h2>
                <p className="text-sm text-gray-500 leading-9">Update your profile picture. Supported files are JPG, PNG, WebP and JPEG</p>
              </div>  
                <div className="md:flex md:gap-5 md:justify-start md:items-center md:pt-4">
                <div className="flex items-center mb-4"> 
                    <div className="w-174.16px h-181px rounded-full bg-white overflow-hidden">
                        <img src="src\assets\react.svg" alt="picture img" className="w-full h-full"></img> 
                    </div> 
                </div> 
                <form> 
                    <div className="mb-4"> 
                        <label className="block text-sm font-semibold">Add new profile picture</label>
                    </div> 
                    <div> 
                      <FileUpload onFileSelected={handleFileSelected}maxSize={5 * 1024 * 1024 * 1024} acceptedFileTypes={['image/jpeg', 'image/png', 'image/webp','image/jpg']}/>
                    </div> 
                </form> 
                </div>
            </div>
    
            {/* Communication Preferences Section */}
            <div className="border-t-2 border-b-2 border-gray-300 pt-4 lg:grid lg:grid-cols-2 lg:gap-4">
              <div>
              <h4 className="text-xl font-semibold mb-2">Communication</h4>
              <p className="text-sm text-gray-500 font-medium leading-8 md:w-401px">Update your e-mail communication preferences anytime.<br />Choose to receive project notifications or disable them completely.</p>
              </div>
              <div className="flex-cols text-sm gap-4">
              <div className="flex flex-col gap-2 pt-4 ">
                  <div className="flex items-center">
                    <input type="checkbox" id="NewTasks" className="appearance-none h-6 w-6 border border-gray-500 rounded-md checked:bg-blue-500 checked:outline-offset-2" />
                      <label htmlFor="WeeklyReports" className="pl-3">New tasks</label>
                  </div>
                  <p>Receive an e-mail alert each time a new task is assigned to me in a project.</p>
                  <br />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="New team members" className="appearance-none h-6 w-6 border border-gray-500 rounded-md checked:bg-blue-500 checked:outline-offset-2" />
                      <label htmlFor="WeeklyReports" className="pl-3">New team members</label>
                  </div>
                  <p>Receive an e-mail alert each time a team members enters in a project I'm assigned to.</p>
                  <br />
                </div>
                <div className="flex flex-col gap-2 pb-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="WeeklyReports" className="appearance-none h-6 w-6 border border-gray-500 rounded-md checked:bg-blue-500 checked:outline-offset-2" />
                      <label htmlFor="WeeklyReports" className="pl-3">Weekly reports</label>
                  </div>
                  <p>Receive a weekly e-mail with a basic report including estimated time and most active members.</p>
                </div>
              </div>
            </div>

            {/* Social Information section */}
            <div className=" pt-6 lg:grid lg:grid-cols-2 lg:gap-4 lg:pt-4">
              <div>
              <h4 className="text-xl font-medium mb-2">Social Information</h4>
              <p className="text-neutral-500 text-sm pb-4">Update your e-mail communication preferences anytime. <br />
              Choose to receive project notifications or disable them completely.</p>
              </div>
              <div className="mb-4 md:w-375px">
              <label className="block text-xs mb-2">Twitter/x</label>
              <div className="flex items-center gap-2 mb-2">
                <input type="text" id="twitter/x" placeholder="x.com/" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
                <input type="text" id="twitter-@" placeholder="TheJohnDoe" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
              </div>
              <label className="block text-xs mb-2">Instagram</label>
              <div className="flex items-center gap-2 mb-2">
                <input type="text" id="instagram" placeholder="instagram.com/" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
                <input type="text" id="instagram-@" placeholder="TheJohnDoe" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
              </div>
              <label className="block text-xs mb-2">Linkedin</label>
              <div className="flex items-center gap-2 mb-12">
                <input type="text" id="linkedin" placeholder="linkedin/in/" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
                <input type="text" id="linkedin-@" placeholder="TheJohnDoe" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
              </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex">
              <button className=" text-15px font-semibold mx-auto bg-slate-800 text-white px-24 py-3 rounded-lg md:w-410px  hover:bg-slate-600">
                Update information
              </button>
            </div>
            <div className="flex justify-center pt-4">
            <p>Never mind, take me <a href="#" className="text-indigo-600 underline">back to my project</a></p>
            </div>
          </div>
        
    
          {/* Footer */}
          <footer className="bg-slate-800 text-white p-4  mt-8">
            <div className="container mx-auto text-center">
              <p>© 2025 Profile Manager. All rights reserved.</p>
            </div>
          </footer>
        </div>
    );
};

export default Settings;