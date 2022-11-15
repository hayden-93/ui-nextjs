import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

import UserCard from '../src/components/UserCard/UserCard';

import users from '../data/users';

export default function Home() {
  return (
    <Box>
      <Text
        fontSize='xxx-large'
        fontWeight='extrabold'
        textAlign='center'
        marginTop='9'
      >
        ACME Corporation Employees
      </Text>
      <Grid
        gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gridGap='10'
        padding='10'
      >
        {users.map((user) => (
          <GridItem key={user.id}>
            <UserCard
              username={user.username}
              avatar={user.avatar}
              first_name={user.first_name}
              last_name={user.last_name}
              job_title={user.job_title}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
