import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Button from "@mui/material/Button";

export default function Home() {
  return (
    <>
    <Button variant="contained">Hello World</Button>;
     <h1>Home Page</h1>
    </>
  )
}
