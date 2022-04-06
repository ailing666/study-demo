import { useState, useEffect } from 'react'
/**
 * 获取页面滚动的高度
 * @returns 滚动的高度
 */
const useWindowScroll = () => {
  const [y, setY] = useState()
  window.addEventListener('scroll', () => {
    setY(document.documentElement.scrollTop)
  })
  return [y]
}

/**
 * 返回存入的msg和改变msg的方法
 * @param {localStorage的key} key 
 * @param {localStorage的key中的默认值} defaultValue 
 * @returns 
 */
const useLocalStorage = (key, defaultValue) => {
  const [msg, setMsg] = useState(defaultValue)
  useEffect(() => {
    window.localStorage.setItem(key, msg)
  }, [key, msg])
  return [msg, setMsg]
}
export { useWindowScroll, useLocalStorage }