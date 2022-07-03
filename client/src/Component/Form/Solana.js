import React, { useState } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function Solana() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [supply, setSupply] = useState('')
    const [website, setWebsite] = useState('')
    const [discord, setDiscord] = useState('')
    const [twitter, setTwitter] = useState('')
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
        formData.append("promote", promote)
        formData.append("date", startDate)
        formData.append("projectImage", fileName)

        setName('')
        setPrice('')
        setSupply('')
        setWebsite('')
        setDiscord('')
        setTwitter('')
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
        <form onSubmit={submitForm} encType="multipart/form-data" autoComplete="off">
            <div className='form-group'>
                <label>Project Name</label>
                <input
                    type="text"
                    className="form-control"
                    name='name'
                    placeholder='Project name...'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className='form-group'>
                <label>Price</label>
                <input
                    type="text"
                    className="form-control"
                    name='price'
                    placeholder='Price link...'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Supply</label>
                <input
                    type="number"
                    className="form-control"
                    name='supply'
                    placeholder='Supply...'
                    value={supply}
                    onChange={(e) => setSupply(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Website Link</label>
                <input
                    type="text"
                    className="form-control"
                    name='website'
                    placeholder='Website...'
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />
            </div>

            <div className='form-group'>
                <label>Discord</label>
                <input
                    type="text"
                    className="form-control"
                    name='discord'
                    placeholder='Discord...'
                    value={discord}
                    onChange={(e) => setDiscord(e.target.value)}
                />
            </div>

            <div className='form-group'>
                <label>Twitter</label>
                <input
                    type="text"
                    className="form-control"
                    name='twitter'
                    placeholder='Twitter...'
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                />
            </div>

            <div className='form-group'>
                <label>Date</label>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                />
            </div>

            <div className='form-group'>
                <label htmlFor='file'>Image</label>
                <input
                    type="file"
                    filename="projectImage"
                    className="form-control"
                    onChange={onChangeFile}
                />
            </div>
            <button className="btn btn-primary btn-block">Submit</button>
        </form>
    )
}
