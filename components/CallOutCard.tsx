import { CheckCircleIcon, ExclamationIcon } from '@heroicons/react/solid';
import { Callout } from '@tremor/react';
import React from 'react'
type Props = {
    message: string;
    warning?: boolean;
}

function CallOutCard({ message, warning }: Props) {
    return (
        <Callout
            className='mt-4'
            icon={warning ? ExclamationIcon : CheckCircleIcon}
            title={message}
            color={warning ? 'rose' : "teal"}
        />
    )
}

export default CallOutCard