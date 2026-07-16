import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center gap-3'>
            <p>The content you are looking for is not available right now</p>
            <Button><Link href={'/'}>Back Home</Link></Button>
        </div>
    );
};

export default NotFoundPage;