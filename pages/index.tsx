import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pandyaji Matrugaya | Home</title>
      </Head>
      <div className="container my-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt delectus ducimus consectetur culpa a quia alias placeat distinctio necessitatibus vel hic molestiae veritatis eius at quos autem sed, mollitia rerum excepturi aliquid facilis iste voluptatibus cumque praesentium? Quibusdam, adipisci consequuntur sed nesciunt, dolorem ipsum veritatis, libero nulla sit tenetur eaque quis nostrum placeat expedita itaque possimus minus ad corrupti ut asperiores. Aliquam velit ipsam doloremque modi deleniti quis magnam natus delectus. Facere vitae nobis ullam, officia amet aut dolore? Harum laborum maxime nulla, voluptatem ipsum doloremque sapiente impedit atque magni soluta officiis maiores autem error quas ex quidem vero. Ratione tenetur est porro qui fugiat, quasi natus doloremque fugit placeat dolores labore illo laborum neque veritatis soluta quis culpa repudiandae quod nulla provident illum. Fuga nostrum dolores soluta libero velit ipsam rem sint dolor distinctio molestias eligendi voluptatibus laboriosam, tenetur laudantium a dolorum, provident impedit earum tempore perspiciatis sequi consectetur nemo aut? Fuga in eveniet dolorum, aliquam numquam officiis consequatur incidunt deserunt amet veniam dignissimos ratione? Facilis eius quod rem! Vitae sed officia labore accusamus, voluptate atque odit maiores neque enim consectetur natus placeat! Sit deserunt quas debitis nobis, qui, ipsum et commodi sunt animi expedita, facilis suscipit molestiae illum sint dolorum? Ipsam ab repellat iste voluptate asperiores odit, quos laboriosam iure, nobis atque molestiae modi consequuntur veniam autem voluptas. Sint nesciunt pariatur at inventore maxime iste rem error quaerat consequuntur, eveniet placeat quod tempora blanditiis voluptatem odio, odit veniam sunt, mollitia aperiam accusamus deserunt praesentium culpa alias atque. Architecto.
      </div>
    </>
  )
}
