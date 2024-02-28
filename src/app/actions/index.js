'use server'


export const handleCreateUserAction = async (data: any) => {
	// console.log(process.env.NEXT_PUBLIC_URL_BACKEND);
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/blogs`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    revalidateTag("list-blogs")
    return await res.json()
}