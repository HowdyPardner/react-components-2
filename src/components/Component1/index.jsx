/* 
// Component-1 - News Ticker

State:
    - create a new state as an array of new string
    - create a new currentNewsIndex state initialized to 0


Button:
    -include a button labled "Next" to cylce to the next news item.


Function:
    - 'newNewsItem' increase the ' currentNewsIndex' by 1, looping back to 0 if it exceeds the last index


Display:
    - use a <div> to display the current news item from the 'news' array'
    
*/

import React, { useState } from 'react'

const NewsTicker = () => {
const [news, setNews] = useState(['News-1', 'News-2', 'News-3', 'News-4'])
const [currentNewsIndex, setCurrentNewsIndex] =useState(0)


let handleOnClick = () => {
    // if we are at the lest index of the news array
    if(currentNewsIndex === news.length - 1){
        setCurrentNewsIndex(0)
    }else{
        // set the index back to 0
        // else setCurrentNewsIndex(currentNewsIndex + 1)
        setCurrentNewsIndex(currentNewsIndex + 1)
    }
}
console.log("news-1", news[1])

  return (
    <div>
        <h3>News Ticker Component</h3>
        <div>{news[currentNewsIndex]}</div>
        <button onClick={handleOnClick}>Next</button>
    </div>
  )
}

export default NewsTicker