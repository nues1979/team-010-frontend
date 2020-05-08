import React from 'react';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Image from '../../components/Image';
import Main from '../../components/Main';
import Paragraph from '../../components/Paragraph';
import Row from '../../components/Row';
import Stack from '../../components/Stack';

export default () => (
  <Main style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <Row style={{ justifyContent: 'flex-start', minWidth: '50px', minHeight: '50px' }}>
      <Image style={{ width: '640px', height: '640px', backgroundImage: 'url(/images/placeholder-01.jpg)' }} />
    </Row>
    <Stack style={{ justifyContent: 'flex-start', minWidth: '50px', minHeight: '50px' }}>
      <Stack style={{ minWidth: '50px', minHeight: '50px' }}>
        <Row style={{ justifyContent: 'flex-start', minWidth: '50px', minHeight: '50px' }}>
          <Paragraph>
            Log Into Your Account
          </Paragraph>
        </Row>
        <Stack style={{ minWidth: '50px', minHeight: '50px' }}>
          <Row style={{ justifyContent: 'center', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
            <Paragraph>
              Email
            </Paragraph>
          </Row>
          <Row style={{ justifyContent: 'center', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
            <Card style={{ justifyContent: 'center', minWidth: '50px', minHeight: '180px', width: '1080px', flexGrow: '0' }} />
          </Row>
        </Stack>
      </Stack>
      <Stack style={{ minWidth: '50px', minHeight: '50px' }}>
        <Stack style={{ minWidth: '50px', minHeight: '50px' }}>
          <Row style={{ justifyContent: 'center', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
            <Paragraph>
              Password
            </Paragraph>
          </Row>
          <Row style={{ justifyContent: 'flex-end', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
            <Card style={{ justifyContent: 'center', minWidth: '50px', minHeight: '180px', width: '530px', flexGrow: '0' }} />
          </Row>
          <Row style={{ justifyContent: 'flex-end', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
            <Button>
              Login
            </Button>
          </Row>
        </Stack>
        <Row style={{ justifyContent: 'flex-end', minWidth: '50px', minHeight: '50px' }}>
          <Paragraph>
            I New User ? Forgot Password
          </Paragraph>
        </Row>
      </Stack>
    </Stack>
  </Main>
);
