import React from 'react';
import { Button, Row, Col } from 'antd';

interface DrawerFooterProps {
  createRecord?: () => void;
}

const DrawerFooter: React.FC<DrawerFooterProps> = ({ createRecord }) => {
  return (
    <Row justify="space-between">
      <Col>
        <Button type="default">Cancelar</Button>
      </Col>
      <Col>
        <Button type="primary" onClick={createRecord}>
          Guardar
        </Button>
      </Col>
    </Row>
  );
};

export default DrawerFooter;