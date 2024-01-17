'use client'

import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import { UserCircleIcon } from "@heroicons/react/24/outline"
import { Icon, Text } from "@tremor/react";

const baseStyle = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

export default function Dropzone(props: any) {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone(props);

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {}),
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  return (
    <div className="container">
      <div {...getRootProps({style})} className='flex-col cursor-pointer'>
        <input {...getInputProps()} />
        <Icon icon={UserCircleIcon} size='xl' />
        <Text>Click or Drop File</Text>
        <Text>Images only.  Max 25MB</Text>
      </div>
    </div>
  );
}