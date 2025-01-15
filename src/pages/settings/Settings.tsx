import { useEffect, useState } from "react";
import FileUpload from "./FileUpload";
import useGetUserById from "../../hooks/useGetUserById";
import profile from '../../assets/avatar/profile.png'
import useUpdateUser from "../../hooks/useUpdateUser";
import { useLoginContext } from "../../context/loginContext";
import { useNavigate } from "react-router";


const Settings = () => {
  function handleFileSelected(): void {
    throw new Error("Function not implemented.");
  }

  const { userLogged, isAuthenticated } = useLoginContext()
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
  }, [isAuthenticated, navigate]);

  const [firstName, setFirstName] = useState('Veronica')
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [twitter, setTwitter] = useState('Veronica');
  const [instagram, setInstagram] = useState('Veronica');
  const [linkedin, setLinkedin] = useState('Veronica');

  const [showModal, setShowModal] = useState(false);







  const { getUserById, user } = useGetUserById()
  const { userUpdateById } = useUpdateUser()

  useEffect(() => {
    if (!user) {
      getUserById(userLogged?.id as string)
    } else {
      setFirstName(user?.firstName)
      setLastName(user?.lastName)
      setEmail(user?.email)
      setTwitter(user?.socials?.twitter)
      setInstagram(user?.socials?.instagram);
      setLinkedin(user?.socials?.linkedin);
    }
  }, [getUserById, userLogged, user])


  const handleUpdateUser = () => {
    const userUpdate = {
      ...user,
      firstName,
      lastName,
      email,
      socials: {
        twitter,
        instagram,
        linkedin,
      }
    }
    userUpdateById('abc123', userUpdate)
      setShowModal(true)
  }

  return (
    <div className="font-roboto">

      {/* Main Content */}
      <div className="container mx-auto my-8 p-6 rounded-lg">
        {/* Profile section */}
        <div className="flex items-center gap-2 pb-10">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full h-119.89px w-115.36px tablet:h-182px tablet:w-174.16px"
          />
          <div>
            <h1 className="text-4xl font-medium tablet:text-5xl">{user?.firstName}{user?.lastName}</h1>
            <p className="text-gray-500 text-xl tablet:text-2xl">{user?.email}</p>
          </div>
        </div>
        <div>
          <div className="border-b-2 border-gray-300 pb-4 ">
            <h1 className="text-3xl font-medium">Project Profile</h1>
            <p className="text-neutral-500 text-sm tablet:text-base ">Update your profile information in the sections below</p>
          </div>
        </div>

        {/* Basic info section */}
        <div className="border-b-2 border-gray-300 pt-2 desktop:grid desktop:grid-cols-2 ldesktopg:gap-4">
          <div className="bg-blue tablet:w-401px">
            <h2 className="text-xl font-medium">Basic Information</h2>
            <p className="text-sm mb-6 text-neutral-500 text-left leading-9">Update your name and e-mail in this section. Note: this information will be public to all your project colleagues and can be changed anytime</p>
          </div>
          <form className="tablet:grid tablet:grid-cols-2  gap-4  desktop:py-6">
            <div className="tablet:col-span-1 mb-4">
              <label className="block text-sm font-semibold mb-2">First Name</label>
              <input value={firstName} onChange={(e) => setFirstName(e.target.value)} id="first-name" placeholder="New first name" className="w-full text-sm px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
            </div>
            <div className="tablet:col-span-1 mb-4">
              <label className="block text-sm font-semibold mb-2">Last name</label>
              <input value={lastName} onChange={(e) => setLastName(e.target.value)} id="last-name" placeholder="New last name" className="w-full text-sm px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
            </div>
            <div className="tablet:col-span-2 mb-4">
              <label className="block text-sm font-semibold mb-2">E-mail</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="New e-mail" className="w-full text-sm px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
            </div>
          </form>
        </div>
        {/* Profile Picture Section */}
        <div className="bg-white pt-3 rounded-lg tablet:h-417px desktop:grid desktop:grid-cols-2 desktop:gap-4 desktop:h-300.5px">
          <div className="tablet:w-401px tablet:h-109px pb-4">
            <h2 className="text-xl font-medium">Profile picture</h2>
            <p className="text-sm text-gray-500 leading-9">Update your profile picture. Supported files are JPG, PNG, WebP and JPEG</p>
          </div>
          <div className="tablet:flex tablet:gap-5 tablet:justify-start tablet:items-center tablet:pt-4">
            <div className="flex items-center mb-4">
              <div className="w-174.16px h-181px rounded-full bg-white overflow-hidden">
                <img src={profile} alt="picture img" className="w-full h-full"></img>
              </div>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Add new profile picture</label>
              </div>
              <div>
                <FileUpload onFileSelected={handleFileSelected} maxSize={5 * 1024 * 1024 * 1024} acceptedFileTypes={['image/jpeg', 'image/png', 'image/webp', 'image/jpg']} />
              </div>
            </form>
          </div>
        </div>

        {/* Communication Preferences Section */}
        <div className="border-t-2 border-b-2 border-gray-300 pt-4 desktop:grid desktop:grid-cols-2 desktop:gap-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Communication</h4>
            <p className="text-sm text-gray-500 font-medium leading-8 tablet:w-401px">Update your e-mail communication preferences anytime.<br />Choose to receive project notifications or disable them completely.</p>
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
        <div className=" pt-6 desktop:grid desktop:grid-cols-2 desktop:gap-4 desktop:pt-4">
          <div>
            <h4 className="text-xl font-medium mb-2">Social Information</h4>
            <p className="text-neutral-500 text-sm pb-4">Update your e-mail communication preferences anytime. <br />
              Choose to receive project notifications or disable them completely.</p>
          </div>
          <div className="mb-4 tablet:w-375px">
            <label className="block text-xs mb-2">Twitter/x</label>
            <div className="flex items-center gap-2 mb-2">
              <label id="twitter/x" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600">x.com/</label>
              <input value={twitter} onChange={(e) => setTwitter(e.target.value)} type="text" id="twitter-@" placeholder="TheJohnDoe" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
            </div>
            <label className="block text-xs mb-2">Instagram</label>
            <div className="flex items-center gap-2 mb-2">
              <label id="instagram.com" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600">instagram.com/</label>
              <input value={instagram} onChange={(e) => setInstagram(e.target.value)} type="text" id="instagram-@" placeholder="TheJohnDoe" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
            </div>
            <label className="block text-xs mb-2">Linkedin</label>
            <div className="flex items-center gap-2 mb-12">
              <label id="linkedin/in/" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600">linkedin/in/</label>
              <input value={linkedin} onChange={(e) => setLinkedin(e.target.value)} type="text" id="linkedin-@" placeholder="TheJohnDoe" className="w-full px-3 text-sm py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></input>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex">
          <button type="button" onClick={handleUpdateUser} className=" text-15px font-semibold mx-auto bg-slate-800 text-white px-24 py-3 rounded-lg tablet:w-410px  hover:bg-slate-600">
            Update information
          </button>
        </div>
        <div className="flex justify-center pt-4">
          <p>Never mind, take me <a href="#" className="text-indigo-600 underline">back to my project</a></p>
        </div>
      </div>
      {showModal && (
        <div id="successModal"  className=" flex  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">

            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Success</span>
              </div>
              <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Successfully update user</p>
              <button onClick={() => setShowModal(false)} data-modal-toggle="successModal" type="button" className="py-2 px-3 text-sm font-medium text-center text-black border border-black rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900">
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;