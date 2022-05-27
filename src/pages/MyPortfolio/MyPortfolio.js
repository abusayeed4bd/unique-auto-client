import React from 'react';
import broker from '../../image/broker.png'
import laptop from '../../image/laptop.png'
import warehouse from '../../image/warehouse.png'

const MyPortfolio = () => {
    return (
        <div className='mx-12'>
            <div className='my-12'>
                <h2 className="text-3xl text-primary font-bold text-center py-8">
                    Personal Information
                </h2>
                <table className='!text-left table table-bordered  text-center w-[50%] mx-auto'>
                    <thead>

                        <tr>
                            <th>Name:</th>
                            <td>Abu Sayeed Muhammad Ibrahim</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <td>abusayeed4bd@gmail.com</td>
                        </tr>
                        <tr>
                            <th>EduCation</th>
                            <td>BSc(honurs), Depertment of Statistice, <br /> MC college, Sylhet</td>
                        </tr>
                        <tr>
                            <th>Expert in:</th>
                            <td><ul>
                                <li>react js</li>
                                <li>javascript (ES6)</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>bootstrap</li>
                                <li>tailwind css</li>
                                <li>daisy ui</li>
                            </ul></td>
                        </tr>
                        <tr>
                            <th>Good at:</th>
                            <td><ul>
                                <li>node js</li>
                                <li>Express js</li>
                                <li>mongo db</li>

                            </ul></td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={broker} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-primary">Broker website</h2>

                        <div class="card-actions justify-end">
                            <a href='https://react-broker-website.web.app/' class="btn btn-primary">Live Link</a>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={laptop} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-primary">Laptop Analysis bd</h2>

                        <div class="card-actions justify-end">
                            <a href='https://laptopanalysisbd.netlify.com/' class="btn btn-primary">Live Link</a>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={warehouse} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-primary">Warehouse Website</h2>

                        <div class="card-actions justify-end">
                            <a href="https://react-node-mongo-warehouse.web.app/" class="btn btn-primary">Live Link</a>
                        </div>
                    </div>
                </div>





            </div>
        </div>
    );
};

export default MyPortfolio;