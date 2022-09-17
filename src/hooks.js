import axios from "axios"
import { useState, useEffect } from "react"
import { GITHUB_API } from "./api"

export function useForm({
  initialValues,
  validate,
  onSuccess,
  onErrors,
  onSubmit,
  refs,
}) {
  const [inputValues, setInputValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  function onChange(e) {
    const { name, value } = e.target
    setInputValues({ ...inputValues, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    setIsSubmitting(true)
    const validateResult = validate(inputValues)
    setErrors(validateResult)

    const errorKeys = Object.keys(validateResult)

    if (errorKeys.length !== 0) {
      const key = errorKeys[0]
      alert(validateResult[key])
      onErrors()
      refs[key].current.focus()
      setIsSubmitting(false)
      return
    }

    if (errorKeys.length === 0) {
      try {
        const result = await onSubmit()
        onSuccess(result)
      } catch (e) {
        onErrors()
      }
      return
    }
  }

  return {
    inputValues,
    onChange,
    isSubmitting,
    errors,
    handleSubmit,
  }
}

export function useUser() {
  const [user, setUser] = useState()

  useEffect(() => {
    getUserinfo()
  }, [])

  async function getUserinfo() {
    const data = await axios.get(`${GITHUB_API}/user`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
    })

    setUser(data.data)
  }

  return user
}
