# Transparent Chat

A modern, secure, and transparent desktop chat application built with Tauri, React, and TypeScript. This application provides a seamless messaging experience while maintaining transparency in its operations. It integrates with Restream.io chat to manage and display your streaming messages from multiple platforms in a single, clean interface.

## Features

- 🔗 Integration with Restream.io chat
- 🚀 Fast and lightweight
- 🎨 Modern and intuitive user interface
- 🔍 Transparent message handling
- 🔄 Multi-platform chat aggregation

## Prerequisites

Before you begin, ensure you have the following:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Rust](https://www.rust-lang.org/tools/install)
- [Git](https://git-scm.com/)
- A [Restream.io](https://restream.io/) account with chat access

## Usage

1. Create a Restream.io account if you don't have one
2. In your Restream dashboard, connect the streaming platforms (Twitch, YouTube, etc.) from which you want to receive chat messages
3. Get your Restream chat URL from the dashboard
4. Launch the Transparent Chat application
5. Paste your Restream chat URL into the application when prompted
6. The application will now display all chat messages from your connected platforms

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/transparent-chat.git
cd transparent-chat
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run tauri dev
```

4. Build for production:
```bash
npm run tauri build
```

## Development Setup

We recommend using the following tools for development:
- [VS Code](https://code.visualstudio.com/)
- [Tauri VS Code Extension](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Project Structure

```
transparent-chat/
├── src/              # React frontend source code
├── src-tauri/        # Rust backend source code
├── public/           # Static assets
└── package.json      # Project dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Copyright © 2024. All rights reserved.

This software and its source code are proprietary and confidential. No part of this software may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the copyright holder. This software cannot be copied, modified, merged, published, distributed, sublicensed, and/or sold without explicit permission from the copyright holder.

For permission requests, please open an issue in the repository.

## Contact

If you have any questions or suggestions, please open an issue in the repository.

---

Built with ❤️ using [Tauri](https://tauri.app/), [React](https://reactjs.org/), and [TypeScript](https://www.typescriptlang.org/)
