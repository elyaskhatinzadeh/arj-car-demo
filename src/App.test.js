import React from 'react';
import {render, screen, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import About from "./pages/About";
import BotIndexPage from "./pages/bot/BotIndexPage";
import axios from "axios";
jest.mock('axios');

test('renders app component', () => {
  render(<About />);
  expect(screen.getByText(/About/i)).toBeInTheDocument();
});


test('renders bot index component', async () => {
  render(<BotIndexPage />);
  expect(screen.getByText(/item/i)).toBeInTheDocument();
});