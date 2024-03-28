import React from "react";
import { Button } from "antd";

interface Props {
    border: string;
    color: string;
    children?: React.ReactNode;
    onClick: () => void;
    type: 'primary' | 'dashed' | 'link' | 'text' | 'default';
    disabled: boolean;
}

const button: React.FC<Props> = ({
    border,
    color,
    children,
    onClick,
    type,
    disabled,
}) => {
    return (
        <Button
        disabled={disabled}
        type={type}
        onClick={onClick}
        style={{
            background: color,
            border,
        }}
        >
            {children}
        </Button>
    )
}

export default button;