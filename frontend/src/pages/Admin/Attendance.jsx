import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {AttendanceContainer, Content, AttendanceContent, AttendanceHeader, AttendanceList, AttendanceItem, StudentName, CheckboxLabel, Divider, SubmitButton} from '../../styles/AttendanceStyles'

const Attendance = () => {
  return (
    <AttendanceContainer>
      <Sidebar />
      <Content>
        <AttendanceContent>
          <AttendanceHeader>Attendance</AttendanceHeader>
          <AttendanceList>
            <AttendanceItem>
              <StudentName></StudentName>
              <CheckboxLabel>
                <input 
                  type='checkbox'
                />
                Present
              </CheckboxLabel>
              <CheckboxLabel>
                <input 
                  type='checkbox'
                />
                Absent
              </CheckboxLabel>
              <CheckboxLabel>
                <input 
                  type='checkbox'
                />
                Absent with apologies
              </CheckboxLabel>
            </AttendanceItem>
          </AttendanceList>
          <SubmitButton>Submit</SubmitButton>
        </AttendanceContent>
      </Content>
    </AttendanceContainer>
  )
}

export default Attendance
 