import Image from "next/image"


const Post = () => {
  return (
    <div className="flex flex-col gap-4">
        {/*USER*/}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/18809659/pexels-photo-18809659/free-photo-of-blue-fiat-500-parked.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>
                <span className="font-medium">Adhiraj Singh</span>
            </div>
                <Image src="/more.png" alt="" width={16} height={16}/>
        </div>
        {/*DESCRIPTION*/}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
            <Image src="https://images.pexels.com/photos/22705208/pexels-photo-22705208/free-photo-of-bmw-m3-on-road.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill className="object-cover rounded-md"/>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet modi vero nostrum harum molestias neque, incidunt explicabo, quo repellendus dolores nesciunt amet laborum hic similique deserunt placeat atque obcaecati. Delectus repellat, ex dolorum accusamus quasi voluptates quisquam libero qui! Perferendis dolores sunt nam iste explicabo, debitis soluta vel! Iure!
            </p>
        </div>
        {/*INTERACTION*/}
        <div className="">
            
        </div>
        {/*USER*/}
    </div>
  )
}

export default Post