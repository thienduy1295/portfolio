import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

const TimelineWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 2px auto;
  gap: 20px;
  margin-bottom: 24px;
`

const Line = styled.div`
  width: 2px;
  background-color: #525252;
  height: 100%;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Year = styled.div`
  font-weight: bold;
  font-size: 16px;
`

const Description = styled.div`
  color: #a0aec0;
`

const Timeline = ({ year, children }) => {
  return (
    <TimelineWrapper>
      <Line />
      <Content>
        <Year>{year}</Year>
        <Description>{children}</Description>
      </Content>
    </TimelineWrapper>
  )
}

export default Timeline
