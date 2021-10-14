import React from 'react'
import { Button, Card, Table, Container, Row, Col, Form } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import FileBase from 'react-file-base64'
import { districts } from 'components/SearchCriterias'

function AddProduct() {
  const [productName, setProductName] = useState('')
  const [minimum, setMinimum] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  const [unit, setUnit] = useState('')
  const [date, setDate] = useState('')
  const [unitPrice, setUnitPrice] = useState('')
  const [divison, setDivison] = useState('')
  const [district, setDistrict] = useState('')
  const [description, setDescription] = useState('')
  const [bookingPercentage, setBookingPercentage] = useState('')
  const [image, setImage] = useState('')

  const resetFields = () => {
    setProductName('')
    setMinimum('')
    setCategory('')
    setAmount('')
    setUnit('')
    setDate('')
    setUnitPrice('')
    setDivison('')
    setDistrict('')
    setDescription('')
    setImage('')
    setBookingPercentage('')
  }

  //let fileName = document.getElementById('photo').files[0].name

  async function addProduct() {
    //data adding
    const product = {
      name: productName,
      minOrder: minimum,
      category: category,
      available: amount,
      unitname: unit,
      availableDate: date,
      unitPrize: unitPrice,
      division: divison,
      district: district,
      description: description,
      image: image,
      bookingPercentage: bookingPercentage,
    }

    console.log(product)

    resetFields()

    // axios
    const token = localStorage.getItem('user')
    const _token = token.split('"').join('')
    //console.log(`Bearer ` + _token)
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }

    axios
      .post('http://127.0.0.1:5000/product/add', product, config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        alert('Product added successfully')
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
        alert('Error')
      })

    //data added
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col className='ml-auto mr-auto' md='8'>
            <Card>
              <div className='header text-center'>
                <h4 className='title'>পণ্য সম্পর্কিত তথ্যাদি</h4>
                <p className='category'>
                  পণ্য যোগ করতে চাইলে নিম্নোক্ত তথ্যাসমূহ সরবরাহ করে সাবমিট
                  করুন।
                </p>
                <br></br>
              </div>
              <Table responsive>
                <thead>
                  <tr>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>পণ্যের নাম</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='productName'>
                          <Form.Control
                            type='text'
                            placeholder='পণ্যের নাম'
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>সর্বনিম্ম পরিমাণ ক্রয়</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='minimum'>
                          <Form.Control
                            type='text'
                            placeholder='সর্বনিম্ম পরিমাণ ক্রয়'
                            value={minimum}
                            onChange={(e) => setMinimum(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>ক্যাটাগরি</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='catagorie'>
                          <select
                            class='form-control'
                            as='select'
                            type='text'
                            placeholder='ক্যাটাগরি'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            <option value=''></option>
                            <option value='corps'>শস্য</option>
                            <option value='vegetables'>শাক-সবজি</option>
                            <option value='fruit'>ফল</option>
                            <option value='pesticides'>সার ও কীটনাশক</option>
                            <option value='poultry'>পোল্ট্রিজাত পণ্য</option>
                            <option value='meat'>মাংস</option>
                            <option value='fish'>মাছ</option>
                            <option value='others'>অন্যান্য</option>
                          </select>
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>পরিমাণ</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='amount'>
                          <Form.Control
                            type='kg'
                            placeholder='পরিমাণ'
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>বুকিং মানি</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='amount'>
                          <Form.Control
                            type='tk'
                            placeholder='বুকিং মানি'
                            value={bookingPercentage}
                            onChange={(e) =>
                              setBookingPercentage(e.target.value)
                            }
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>ইউনিট</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='unitName'>
                          <Form.Control
                            type='text'
                            placeholder='ইউনিট'
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>তারিখ</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='date'>
                          <Form.Control
                            type='date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>এককপ্রতি মূল্য</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='price'>
                          <Form.Control
                            type='number'
                            placeholder='মূল্য'
                            value={unitPrice}
                            onChange={(e) => setUnitPrice(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>বিভাগ</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='divison'>
                          <select
                            class='form-control'
                            as='select'
                            type='text'
                            placeholder='বিভাগ'
                            value={divison}
                            onChange={(e) => setDivison(e.target.value)}
                          >
                            <option value=''></option>
                            <option value='Dhaka'>ঢাকা</option>
                            <option value='Mymensingh'>ময়মনসিংহ</option>
                            <option value='Sylhet'>সিলেট</option>
                            <option value='Khulna'>খুলনা</option>
                            <option value='Barishal'>বরিশাল</option>
                            <option value='Rangpur'>রংপুর</option>
                            <option value='Rajshahi'>রাজশাহী</option>
                            <option value='Chattogram'>চট্টগ্রাম</option>
                          </select>
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>জেলা</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='district'>
                        <select
                            class='form-control'
                            as='select'
                            type='text'
                            placeholder='জেলা'
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                          >
                            {districts(divison)}
                          </select>
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>বিবরণ</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='floatingTextarea2'>
                          <Form.Control as='textarea'
                            type='text'
                            placeholder='বিবরণ'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>ছবি যোগ করুন</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='photo'>
                          <div>
                            <FileBase
                              type='file'
                              multiple={false}
                              onDone={({ base64 }) => {
                                console.log(base64)
                                setImage(base64)
                              }}
                            />
                          </div>
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>
                  <tr className='last-row'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <Button
                        className='btn-round btn-fill'
                        variant='success'
                        onClick={addProduct}
                      >
                        যোগ করুন
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AddProduct
