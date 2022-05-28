import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border w-[90%] mx-auto p-5 my-5'>
                <h2 className="text-2xl text-primary">
                    How will you improve the performance of a React Application?
                </h2>
                <hr />
                <p className="text-lg">
                    there are many ways to improve react app performance here is some of them:

                    <ul>
                        <li> Using re useable component</li>
                        <li> cache data to browser</li>
                        <li> Using reselect selectors</li>
                        <li> Compress images</li>
                    </ul>
                </p>
            </div>
            <div className='border w-[90%] mx-auto p-5 my-5'>
                <h2 className="text-2xl text-primary">
                    What are the different ways to manage a state in a React application?
                </h2>
                <hr />
                <p className="text-lg">
                    different ways to manage a state in a React application:

                    <ul>
                        <li> Local state</li>
                        <li> Global state </li>
                        <li>Server state</li>
                        <li> URL state</li>
                    </ul>
                </p>
            </div>
            <div className='border w-[90%] mx-auto p-5 my-5'>
                <h2 className="text-2xl text-primary">
                    How does prototypical inheritance work?
                </h2>
                <hr />
                <p className="text-lg">
                    there are many ways to improve react app performance here is some of them:

                    <ul>
                        <li> Using re useable component</li>
                        <li> cache data to browser</li>
                        <li> Using reselect selectors</li>
                        <li> Compress images</li>
                    </ul>
                </p>
            </div>
            <div className='border w-[90%] mx-auto p-5 my-5'>
                <h2 className="text-2xl text-primary">
                    You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </h2>
                <hr />
                <p className="text-lg">
                    when I will show data to client side I will use a onchange function on search field and use the name in the api link query such as product api link example.com/product I will fetch  <span className='text-primary'> example.com/product?name=searchtext</span>
                </p>
            </div>
            <div className='border w-[90%] mx-auto p-5 my-5'>
                <h2 className="text-2xl text-primary">
                    What is a unit test? Why should write unit tests?
                </h2>
                <hr />
                <p className="text-lg">
                    A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system


                </p>
                <p className="text-lg">
                    For the best practice, all projects must be under unit testing, but normally it is used for larger projects. Smaller projects can still benefit from unit tests, but project managers and clients should evaluate the time needed to develop unit tests during the project.

                </p>
            </div>
        </div>
    );
};

export default Blog;