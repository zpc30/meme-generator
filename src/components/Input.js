import React, { useState, useEffect } from 'react';

function Input(props) {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImg: 'https://i.imgflip.com/261o3j.jpg'
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        async function getMemes() {
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes();
    }, [])

    function newMeme() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const nextMeme = allMemes[randomNumber].url
        setMeme(oldMeme => {
            return {
                ...oldMeme,
                randomImg: nextMeme
            }
        })
    }

    function handleChange(event) {
        setMeme(oldMeme => {
            const { name, value } = event.target
            return {
                ...oldMeme,
                [name]: value
            }
        })
    }


    return (
        <div className='form'>
            <input
                className='input1'
                type='text'
                name='topText'
                value={meme.topText}
                onChange={handleChange}
                placeholder='hello'
            />
            <input
                className='input2'
                type='text'
                name='bottomText'
                value={meme.bottomText}
                onChange={handleChange}
                placeholder='kitty'
            />
            <button onClick={newMeme}>Get a new meme</button>
            <div className='meme'>
                <h1 className='top'>{meme.topText}</h1>
                <img src={meme.randomImg} />
                <h1 className='bottom'>{meme.bottomText}</h1>
            </div>
        </div>
    )
}

export default Input;