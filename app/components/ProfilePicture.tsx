import Image from "next/image";

const ProfilePicture = () => {
    return (
        <section>
            <Image
                src="/images/profile-pitcure.jpg"
                alt="A profile picture of the user"
                width={200}
                height={200}
                priority={true}
                className="border-4 border-black dark:border-slate-800 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
            />
        </section>
    )
}

export default ProfilePicture;