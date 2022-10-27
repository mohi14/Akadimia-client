import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-semibold my-10'>Welcome the Blog</h1>

            <div className='m-10 p-10 border-2 border-primary rounded-xl'>
                <h3 className='text-2xl font-semibold mb-2 text-primary'>What is cors?</h3>
                <p >Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                    An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

                    For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.</p>
            </div>

            <div className='m-10 p-10 border-2 border-primary rounded-xl'>
                <h3 className='text-2xl font-semibold mb-2 text-primary'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p >The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br />
                    Authentication keeps invalid users out of databases, networks, and other resources. These types of authentication use factors, a category of credential for verification, to confirm user identity. Here are just a few of those methods.
                    <li>Single-Factor/Primary Authentication</li>
                    <li>Two-Factor Authentication (2FA)</li>
                    <li>Single Sign-On (SSO)</li>
                    <li>Multi-Factor Authentication (MFA)</li>
                </p>
            </div>
            <div className='m-10 p-10 border-2 border-primary rounded-xl'>
                <h3 className='text-2xl font-semibold mb-2 text-primary'>How does the private route work?</h3>
                <p >Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application. Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

                    The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.</p>
            </div>
            <div className='m-10 p-10 border-2 border-primary rounded-xl'>
                <h3 className='text-2xl font-semibold mb-2 text-primary'>What is Node? How does Node work?</h3>
                <p >Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. <br />

                    Node.js basically works on two concept

                    <li>Asynchronous</li>
                    <li>Non-blocking I/O</li></p>
            </div>
        </div>


    );
};

export default Blog;