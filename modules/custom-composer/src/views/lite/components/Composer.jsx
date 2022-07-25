// This component is an example on how to replace the composer input of the web chat (text input)
import VoiceRecorder from './VoiceRecorder'
import axios from 'axios'

import React, { useState , useEffect } from 'react'
import style from './style.scss'
// You can use Sass (https://sass-lang.com/documentation/syntax) to style your custom composer

export const Composer = props => {
  const [input, setInput] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    // Calculate whether the component input state value is now an empty string (has length of 0)
    // If it's an empty string, we disable sending that value as a chat message
    // If it's not, we enable sending that value as a chat message
    setIsDisabled(input.length === 0)
  }, [input])

  /**
   * In this onChange example we're setting the value of the component input state as well as switching the toggle for enabling message sending on or off
   * It's a simple function, but yours could potentially be more complex.
   * For example, you could add API calls to make varifications or fetch additional data.
   */
  const handleChange = e => {
    // Prevent the default behaviour of the input HTML component `onchange` event
    e.preventDefault()
    // Proceed to set our component `input` state with the value received from the HTML input element
    setInput(e.target.value)
  }

  /**
   * In this onClick example we're sending the saved input state to the chat if sending is enabled.
   * It's a simple function, but yours could potentially be more complex.
   * For example, you could add API calls to make varifications or fetch additional data.
   */
  const handleOnClick = async e => {
    // Prevent the default behaviour of the input HTML component `onchange` event
    e.preventDefault()
    // Check if the component message sending toggle evaluates to disabled
    if (isDisabled) {
      // if it does, then simply return right away, cancelling further processing
      return
    }
    // Use the ComposerStore instance passed to this component through the props to update the message list
    props.store.composer.updateMessage(input.trim())
    // Then send the message
    await props.store.sendMessage()
    // Then set the component input value to an empty string
    setInput('')
  }

  const onVoiceStart = () => {
    //this.setState({ isRecording: true })
  }
  
  const onVoiceEnd = async (voice, ext) => {
    //this.setState({ isRecording: false })
    let data = {
      buffer: voice.toString('base64'), 
      string: ext 
    }
    const postResponse = await axios.post('http://127.0.0.1:2000/data', data)
    setInput(postResponse['data'])
    //await props.store.composer.updateMessage(postResponse['data'])
  }

  const onVoiceNotAvailable = () => {
    console.warn(
      'Voice input is not available on this browser. Please check https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder for compatibility'
    )
  }

  return (
    <div className={style.wrapper}>
      <input
        className={style.input}
        type="text"
        placeholder="Custom Composer Input"
        onChange={handleChange}
        value={input}
      />
      <button className={style.btn} type="button" onClick={handleOnClick} disabled={isDisabled}>
        send
      </button>
      <VoiceRecorder onStart={onVoiceStart} onDone={onVoiceEnd} onNotAvailable={onVoiceNotAvailable} />
    </div>
  )
}