import React, { useState } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './form.css'

export default function Solana() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [supply, setSupply] = useState('')
    const [website, setWebsite] = useState('')
    const [discord, setDiscord] = useState('')
    const [twitter, setTwitter] = useState('')
    const [description, setDescription] = useState('')
    const [promote, setPromote] = useState(false)
    const [startDate, setStartDate] = useState();
    const [fileName, setFileName] = useState('')
    const [message, setMessage] = useState('')

    const onChangeFile = (e) => {
        setFileName(e.target.files[0])
    }


    const submitForm = e => {
        e.preventDefault()

        const formData = new FormData();

        formData.append("name", name)
        formData.append("price", price)
        formData.append("supply", supply)
        formData.append("website", website)
        formData.append("discord", discord)
        formData.append("twitter", twitter)
        formData.append("description", description)
        formData.append("promote", promote)
        formData.append("date", startDate)
        formData.append("image", fileName)

        setName('')
        setPrice('')
        setSupply('')
        setWebsite('')
        setDiscord('')
        setTwitter('')
        setDescription('')
        setPromote('')
        setStartDate('')
        setFileName('')


        axios.post("/api/add", formData)
            .then((res) => setMessage(res.data))
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='form-container'>
            <form onSubmit={submitForm} encType="multipart/form-data" autoComplete="off">
                <div className='form-input'>
                    <label>Project Name</label>
                    <input
                        type="text"
                        name='name'
                        placeholder='Project name...'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='form-input'>
                    <label>Price</label>
                    <input
                        type="text"
                        name='price'
                        placeholder='Price link...'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className='form-input'>
                    <label>Supply</label>
                    <input
                        type="number"
                        name='supply'
                        placeholder='Supply...'
                        value={supply}
                        onChange={(e) => setSupply(e.target.value)}
                    />
                </div>
                <div className='form-input'>
                    <label>Website Link</label>
                    <input
                        type="text"
                        name='website'
                        placeholder='Website...'
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>

                <div className='form-input'>
                    <label>Discord</label>
                    <input
                        type="text"
                        name='discord'
                        placeholder='Discord...'
                        value={discord}
                        onChange={(e) => setDiscord(e.target.value)}
                    />
                </div>

                <div className='form-input'>
                    <label>Twitter</label>
                    <input
                        type="text"
                        name='twitter'
                        placeholder='Twitter...'
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                    />
                </div>

                <div className='form-input'>
                    <label>Description</label>
                    <textarea
                        name='description'
                        placeholder='Type...'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className='form-input'>
                    <label>Date</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyyy h:mm aa"
                        showTimeInput
                    />
                </div>

                <div className='form-input'>
                    <label htmlFor='file'>Image</label>
                    <input
                        type="file"
                        filename="image"
                        onChange={onChangeFile}
                    />
                </div>
                <button className="button">Submit</button>
            </form>
        </div>
    )
}
