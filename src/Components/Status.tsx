import React from 'react'

type StatusProps = {
    text: string,
    bg: string,
    color: string,
    icon: React.ReactNode
}

export default function Status(statusProps: StatusProps) {
    return (
        <div
            className={`${statusProps.bg} ${statusProps.color} p-1 font-medium rounded flex items-center gap-1`}
        >
            {statusProps.text} {statusProps.icon}
        </div>
    )
}
