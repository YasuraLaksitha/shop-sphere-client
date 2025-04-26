import {RotatingLines} from "react-loader-spinner";

type LoaderProps = {
    text?: string
}

export default function Loader(props: Readonly<Partial<LoaderProps>>) {
    return (
        <div className="mt-4">
            <RotatingLines
                visible={true}
                width="96"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
            />
            <span className="ml-2 text-slate-800">
                {props.text ?? 'Please Wait...'}
            </span>
        </div>
    );
}

