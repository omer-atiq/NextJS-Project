export default async function UserProfile({params}: any) {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-4xl">
            <h1>Profile</h1>
            <hr></hr>
            <p className="text-4xl">Profile page <span className="p-2 rounded bg-orange-500">{params.id}</span></p>
        </div>
    )
}