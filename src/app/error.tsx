"use client"

interface ErrorProps {
    reset: () => void;
}

const Error = ({reset}: ErrorProps) => {
    return(
        <div className="flex flex-col justify-start items-start">
            <span>Something Went Wrong and it was not your fault. You can either;</span>
            <button
             onClick={reset}
             className="rounded-md p-2 border-2 border-#000"
            >
                Refresh Page now!
            </button>
            <span>Or Try again later</span>
        </div>
    )
}

export default Error;