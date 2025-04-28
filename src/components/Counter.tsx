type CounterProps = {
    quantity: number;
    handleIncrement: VoidFunction;
    handleDecrement: VoidFunction;
}

export default function Counter(props: Readonly<CounterProps>) {
    return (
        <div className={'flex gap-x-5 justify-center items-center'}>
            <button
                className={`text-lg rounded-sm px-3 py-1 border-2  text-slate-800 
                ${props.quantity >= 1 ? 'border-slate-800 cursor-pointer hover:bg-gray-200' : 'border-slate-400'}`}
                onClick={props.handleDecrement}
                disabled={props.quantity < 1}>
                -
            </button>
            <div>
                {props.quantity}
            </div>
            <button
                className={'cursor-pointer text-lg hover:bg-gray-200 rounded-sm px-3 py-1 border-2 border-slate-800 text-slate-800'}
                onClick={props.handleIncrement}>
                +
            </button>
        </div>
    )
}