import React from 'react';
import {StyleSheet, Image} from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { Box, profiletheme, Text } from '../theme';
import { ProfContainer } from '../Components';

const ProfilePage = ()=>{
    return(
        <ThemeProvider theme={profiletheme}>
            <Box flex={1}>
                <Box height="74%">
                    
                    <ProfContainer/>
                    <Box flexDirection="row" position="absolute" marginTop="l" width= '100%' height= "8%">

                    <Image
                        style={styles.backIcon}
                        source={require('../assets/icons/back2.png')}
                    />
                    <Text variant="title" marginLeft="m" paddingBottom="xxs" paddingTop="xxs">
                        Profile
                    </Text>
                    <Box flex={1}/>
                    <Image
                        style={styles.heartIcon}
                        source={require('../assets/icons/heart.png')}
                    />

                    </Box>

                    <Box  marginHorizontal="l" marginTop="xxl" marginBottom="xxl" flex={1} backgroundColor="white" borderRadius={12} padding="m">
                        <Box flexDirection="row" height="37.87%" width="100%" marginBottom="s">
                            <Image
                                style={{width:"55.97%", height:"100%", borderRadius:5}}
                                source={require('../assets/images/profile.png')}
                             /> 
                             
                            <Box flex={1} paddingHorizontal="m" paddingVertical="s">
                                <Text variant="statTitle">₹1k - ₹3k</Text>
                                <Text variant="statSub" marginTop="negs">Budget</Text>
                                <Text variant="statTitle">88%</Text>
                                <Text variant="statSub"  marginTop="negs">Satisfaction</Text>
                                <Text variant="statTitle">20</Text>
                                <Text variant="statSub" marginTop="negs" >Collabration</Text>
                            </Box>
                        </Box>
                        <Text variant="profileName">Farhan Patel</Text>
                        <Text variant="details">Male | Age 25 | Mumbai</Text>
                        <Box flexDirection="row" marginTop="xs">
                        <Image
                            style={{opacity:0.5, width:15, height:15}}
                            source={require('../assets/icons/tag.png')}
                        />
                        <Text variant="interests" marginHorizontal="xs">Fashion</Text>
                        <Image
                            style={{opacity:0.5, width:15, height:15}}
                            source={require('../assets/icons/tag.png')}
                        />
                        <Text variant="interests" marginHorizontal="xs">Beauty</Text>
                        <Image
                            style={{opacity:0.5, width:15, height:15}}
                            source={require('../assets/icons/tag.png')}
                        />
                        <Text variant="interests" marginHorizontal="xs">Health</Text>
                        </Box>
                        <Text variant="description" marginTop="xs">
                        For the past five years or so of being an Independent Recording Artist. I have written three bios and description of my music style iced jackets. This by chance is the best advice I have ever received.
                        </Text>
                    </Box>
                   

                </Box>

                
            </Box>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    backIcon: {
        marginLeft:"4.8%",
        marginVertical: "1.739%",
        width:"2%",
        height:"56.522%",
    },
    heartIcon: {
        marginRight:"4.8%",
        marginVertical: "1.739%",
        width:"5%",
        height:"56.522%",
    },
});

export default ProfilePage;