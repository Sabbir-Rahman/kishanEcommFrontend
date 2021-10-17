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
      isAvailableNow: false,
    }

    console.log(product)

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
        alert('পণ্য ভেরিফিকেশনের জন্য যুক্ত হয়েছে')
        window.location.reload()
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
                            <option value='শস্যওবীজ'>শস্য ও বীজ</option>
                            <option value='শাক-সবজি'>শাক-সবজি</option>
                            <option value='ফল'>ফল</option>
                            <option value='সারওকীটনাশক'>সার ও কীটনাশক</option>
                            <option value='পোল্ট্রিজাতপণ্য'>
                              পোল্ট্রিজাত পণ্য
                            </option>
                            <option value='মাংস'>মাংস</option>
                            <option value='মাছ'>মাছ</option>
                            <option value='অন্যান্য'>অন্যান্য</option>
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
                            type='text'
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
                    <td>একক</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='unit'>
                          <select
                            class='form-control'
                            as='select'
                            type='text'
                            placeholder='একক'
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                          >
                            <option value=''></option>
                            <option value='কেজি'>কেজি</option>
                            <option value='মণ'>মণ</option>
                            <option value='পিস'>পিস</option>
                            <option value='লিটার'>লিটার</option>
                            <option value='ডজন'>ডজন</option>
                            <option value='টন'>টন</option>
                            <option value='হালি'>হালি</option>
                          </select>
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
                            type='text'
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
                            <option value='ঢাকা'>ঢাকা</option>
                            <option value='ময়মনসিংহ'>ময়মনসিংহ</option>
                            <option value='সিলেট'>সিলেট</option>
                            <option value='খুলনা'>খুলনা</option>
                            <option value='বরিশাল'>বরিশাল</option>
                            <option value='রংপুর'>রংপুর</option>
                            <option value='রাজশাহী'>রাজশাহী</option>
                            <option value='চট্টগ্রাম'>চট্টগ্রাম</option>
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
                          <Form.Control
                            as='textarea'
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
                              onClick={(e) => (e.target.value = null)}
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
