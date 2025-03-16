const Projects = () => {
    return (
        <div className="mt-30">
            <h1 className="flex justify-center text-center text-3xl underline decoration-[#70d170] underline-offset-10">
                Projects
            </h1>

            <div className="flex flex-col justify-center items-center text-center mt-12">
                <a href="https://github.com/kranthikumar300/Netflix-clone-project" className="flex flex-col items-center">
                    <img
                        src="https://simpleicons.org/icons/netflix.svg"
                        alt="netflix"
                        className="h-16 w-16"
                    />
                    <h1 className="text-lg mt-2">Netflix Clone</h1>
                </a>
            </div>
        </div>
    );
};

export default Projects;
