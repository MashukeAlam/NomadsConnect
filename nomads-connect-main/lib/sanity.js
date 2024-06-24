import sanityClient from '@sanity/client'



export const client = sanityClient({
  projectId: 'do6zc7m1',
  dataset: 'production',
  apiVersion: 'v1',
  token:'sk8zEtARBTLajdhlVKMjGphl6ucUwoXI9zk3JSvN43LUImtw1vrip3DfZ67ymqcqc1lSHr2Nu5lvxg7yWBPeJ06FvOE0hkUzD0MQxHgnVmbG7myZXBr00GsVIhcpZ2FalwlmE0W5SnpLFIZhlhrVcCwg7oKoK4d6aVDuCor4j8Q1XNDRylsp',
  useCdn: false,
})
