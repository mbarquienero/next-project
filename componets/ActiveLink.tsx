import { useRouter } from 'next/router';
import React, { FC, ReactNode } from "react";

import Link from 'next/link';

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}

interface Props {
    text: string,
    href: string,
  }

export const ActiveLink: FC<Props> = ({ text, href }) => {

    const { asPath } = useRouter();

    return (
        <Link href={href} legacyBehavior>
            <a style={asPath === href ? style : undefined}>{text}</a>
        </Link>
        );
};