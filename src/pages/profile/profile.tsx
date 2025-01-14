import { useEffect } from "react";
import useGetUserById from "../../hooks/useGetUserById";
import useListTask from "../../hooks/useListTask";
import profile from '../../assets/avatar/profile.png'

const Profile = () => {

    const {
        getUserById,
        user,
        loading
    } = useGetUserById()

 const {
    getListTasks,
    listTask,

    
   
 } = useListTask()

    useEffect(() => {
        if (!user) {
            getUserById('abc123')
        }
    }, [user, getUserById])

    useEffect(() => {
        if (!listTask.length) {
            getListTasks ()
        }
    }, [listTask, getListTasks])



    return loading ? <p>Carregando dados do usuário...</p> : (
        <div className="bg-neutral-100 min-h-screen">

            {/* Main content */}
            <div className="max-w-[1440px] px-4 py-6">
                <div className="bg-white rounded-lg p-6 relative">

                    <div className="grid grid-cols-1 desktop:grid-cols-2 relative">
                        <div className="hidden desktop:block absolute right-0 top-0 w-[1px] h-full bg-gray-300" style={{ left: '50%' }}></div>

                        <div>
                            {/* Profile Section */}
                            <div className="flex items-center gap-6 mb-8">
                                <img src={ profile } alt="profile" className="w-32 h-32 rounded-full bg-white" />
                                <div>
                                    <h2 className="text-4xl font-semibold">{user?.firstName} {user?.lastName}</h2>
                                    <p className="text-2xl text-gray-500">{user?.username}</p>
                                </div>
                            </div>

                            {/* Profile Data Section */}
                            <div className="w-[97.5%] border-b border-gray-300 pb-4 mb-8">
                                <h2 className="text-xl font-medium"></h2>
                                <p className="text-gray-500">{user?.firstName} {user?.lastName }Information</p>
                            </div>

                            {/* Contact Section */}
                            <div className="space-y-4 mb-8">
                                <h2 className="text-xl font-medium">Contact</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <span className="text-gray-500 font-medium">E-mail</span>
                                    <span className="text-gray-500">{user?.email}</span>
                                    <span className="text-gray-500 font-medium">Twitter/x</span>
                                    <span className="text-gray-500">{user?.socials?.twitter}</span>
                                    <span className="text-gray-500 font-medium">Instagram</span>
                                    <span className="text-gray-500">{user?.socials?.instagram}</span>
                                    <span className="text-gray-500 font-medium">LinkedIn</span>
                                    <span className="text-gray-500">{user?.socials?.linkedin}</span>
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-medium">Details</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <span className="text-gray-500 font-medium">User ID</span>
                                    <span className="text-gray-500">{user?.id}</span>
                                    <span className="text-gray-500 font-medium">Creation date</span>
                                    <span className="text-gray-500">{user?.createdAt}</span>
                                    <span className="text-gray-500 font-medium">Title</span>
                                    <span className="text-gray-500">Project Manager</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="desktop:pl-8">
                            {/* Latest Activity Section */}
                            <div className="mt-8 border-t border-gray-300 pb-4 desktop:border-0">
                                <h2 className="text-xl font-medium mb-2">Latest activity</h2>
                                <p className="text-gray-500 mb-6"> {user?.firstName} {user?.lastName }last interactions</p>
                                <div className="space-y-4">
                                    {[...Array(7)].map((_, index) => (
                                        <div key={index} className="flex items-center gap-4">
                                            <img src={profile} alt="avatar" className="w-12 h-12 rounded-full" />
                                            <p className="text-sm text-gray-500">
                                                <span className="font-medium text-black">{user?.firstName} {user?.lastName }</span>
                                                {" marked a task as done  "}
                                                <span className="font-medium text-black">on Set 25, 2024</span>

                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Weekly Report Section */}
                            <div>
                                <h2 className="text-xl font-medium mb-2">Weekly report</h2>
                                <p className="text-gray-500 mb-6">Tasks estimate</p>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="font-medium">Total tasks assigned</span>
                                        <span className="text-blue-700 font-bold">{listTask?.filter((task)=>{
                                            return task?.members?.includes( user?.username as string)
                                        })?.length}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-medium">Average work time</span>
                                        <span className="text-blue-700 font-bold">15h 25min</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;