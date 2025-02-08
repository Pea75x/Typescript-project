import { Row, Col, Stack, Button, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactSelect from 'react-select'

export function NoteList({ availableTags }) {
  return (
    <div>
      <Row>
        <Col><h1>Notes</h1></Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to="/new">
              <Button variant="primary">Create</Button>
            </Link>
            <Button variant="outline-secondary">Edit Tags</Button>
          </Stack>
        </Col>
      </Row>
      <Form>
        <Row className="mb-4">
          <Col>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <FormControl type="text" />
            </Form.Group>
          </Col>
           <Col>
            <Form.Group controlId='tags'>
              <Form.Label>Tags</Form.Label>
              <ReactSelect
                options={availableTags.map(tag => {
                  return { label: tag.label, value: tag.id }
                })}
                value={selectedTags.map(tag => {
                  return { label: tag.label, value: tag.id }
                })}
                isMulti
                onChange={tags => {
                  setSelectedTags(tags.map(tag => {
                    return { label: tag.label, id: tag.value }
                  }))
                }}/>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  )
}