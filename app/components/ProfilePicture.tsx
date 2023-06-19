import Image from "next/image";

const ProfilePicture = () => {
    return (
        <section className="flex justify-center">
            <Image
                src="/images/picture.jpg"
                alt="A profile picture of the user"
                width={150}
                height={150}
                priority={true}
                className="border-4 border-black dark:border-slate-800 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
            />
        </section>
    )
}

export default ProfilePicture;