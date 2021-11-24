import React from 'react'
import Top from '../../component/main/top'
import Footer from '../../component/main/Footer'

export default function ManageAdmin() {
    return (
    <>
        <div id="main">
            <Top/>     
            <div className="container_manage">
                <div className="con_manage">
                    <h2>MANAGE PRODUCTS</h2>
                    <a id="Add" href="/InsertProduct"><i class="fas fa-plus"></i></a>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">NAME</th>
                                <th scope="col">MÃ SỐ</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">IMG</th>
                                <th scope="col">DESCRIPTIONS</th>
                                <th scope="col">ACTIONS</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>
                                    <a href="" className="btn btn-secondary">DELETE</a>
                                    <a href="" className="btn btn-secondary">UPDATE</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>
                                    <a href="" className="btn btn-secondary">DELETE</a>
                                    <a href="" className="btn btn-secondary">UPDATE</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>
                                    <a href="" className="btn btn-secondary">DELETE</a>
                                    <a href="" className="btn btn-secondary">UPDATE</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>
                                    <a href="" className="btn btn-secondary">DELETE</a>
                                    <a href="" className="btn btn-secondary">UPDATE</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>
                                    <a href="" className="btn btn-secondary">DELETE</a>
                                    <a href="" className="btn btn-secondary">UPDATE</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>
                                    <a href="" className="btn btn-secondary">DELETE</a>
                                    <a href="" className="btn btn-secondary">UPDATE</a>
                                </td>
                            </tr>                          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        {/* <!--Begin: Footer--> */}
        <Footer/>
    </>
    )
}
