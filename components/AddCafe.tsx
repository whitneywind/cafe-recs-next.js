import { NextPage } from "next"
import { ChangeEvent, SyntheticEvent } from "react";

const AddCafe: NextPage = () => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    }

    const handleSubmit = (e: SyntheticEvent) => {

    }

    return (
        <form onSubmit={handleSubmit} action="../pages/api/registerCafe" method="post">
            <input onChange={handleChange} required type="" name="" placeholder=""></input>
        </form>
    )
}
export default AddCafe;