import React from 'react';


const Blog = () => {
    return (
        <div>
          <div className='border-4 rounded-lg bg-gray-400 p-10 w-2/4 mx-auto'>
            <h2 className='text=4xl font-bold pb-4'>
               Q-1 : What is the purpose of React Router</h2>
            <hr />
            <p>
            React Router is a standard library for routing in React. It enables the <br /> navigation among views of various components in a React Application, allows   <br /> changing the browser URL, and keeps the UI in sync with the URL
            </p>
          </div>

          <div className='border-4 rounded-lg bg-gray-400 p-10 w-2/4 mx-auto'>
            <h2 className='text=4xl font-bold pb-4'>
               Q-2 : How does context api work?</h2>
            <hr />
            <p>
            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
            </p>
          </div>

          <div className='border-4 rounded-lg bg-gray-400 p-10 w-2/4 mx-auto'>
            <h2 className='text=4xl font-bold pb-4'>
               Q-3 : What is  useHref()</h2>
            <hr />
            <p>
            The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. Tip: You may be interested in taking a look at the source for the Link component in react-router-dom to see how it uses useHref internally to determine its own href value.
            </p>
          </div>
        </div>
    );
};

export default Blog;