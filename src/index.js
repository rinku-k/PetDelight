import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navigator } from './core/navigation';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator />
    </SafeAreaView>
  );
};

export default App;

// TODO:
// Create Ads -
// 1. Location (scope: IN)
// 2. Image (max size limit)
// 3. Description (validate no number is added) - show warning cyber crime related
// 4. UserId (user mobile must be linked)
// 5. Bird breed (only IN exotic)

// View Ads -
// 1. Report Ad -> categories & Desc
// 2. Chat now
// 3. Mark Interested (optional)

// Admin (Profile) -
// 1. View reported Ad
// 2. Disable all Ads by user
