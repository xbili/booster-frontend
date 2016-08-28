import React, { Component } from 'react'

export const BusinessInfo = ({ isOwner, id, name, description, logoUrl }) => (
  <div>
    <p>{isOwner ? 'I am the owner' : 'I am a spy'}</p>
    <p>id: {id}</p>
    <p>name: {name}</p>
    <p>description: {description}</p>
    <p>logo: {logoUrl ? <img src={logoUrl} /> : 'No logo available'}</p>
  </div>
)

export default BusinessInfo

