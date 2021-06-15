require("dotenv").config();
const remarkMath = require(`remark-math`);

const sidebarCategories = {
  null: ["index", "intro/support"],
  Installation: [
    "installation/system-requirements",
    "installation/windows",
    "installation/mac",
    "installation/linux",
    "installation/raspberry",
    "installation/update-version",
    "installation/restore-previous-version",
    "installation/multiple-bots",
  ],
  Operation: [
    "operation/overview",
    "operation/user-interface",
    "operation/launch-exit",
    "operation/password",
    "operation/keys-wallets-nodes",
    "operation/connect-exchange",
    "operation/balances",
    "operation/config-files",
    "operation/start-stop",
    "operation/pause-resume",
    "operation/checking-status",
    "operation/performance-history",
    "operation/override-fees",
    "operation/log-files",
    "operation/strategy-autostart",
  ],
  Features: [
    "features/balance-limit",
    "features/debug",
    "features/telegram",
    "features/minimum-order-size",
    "features/paper-trade",
    "features/performance-history",
    "features/kill-switch",
    "features/rate-oracle",
  ],

  "Spot Connectors": [
    "spot-connectors/overview",
    "spot-connectors/ascend-ex",
    "spot-connectors/balancer",
    "spot-connectors/bamboo-relay",
    "spot-connectors/beaxy",
    "spot-connectors/binance",
    "spot-connectors/binance-us",
    "spot-connectors/bitfinex",
    "spot-connectors/bittrex",
    "spot-connectors/blocktane",
    "spot-connectors/coinbase",
    "spot-connectors/coinzoom",
    "spot-connectors/crypto-com",
    "spot-connectors/digifinex",
    "spot-connectors/dolomite",
    "spot-connectors/dydx",
    "spot-connectors/ftx",
    "spot-connectors/hitbtc",
    "spot-connectors/huobi",
    "spot-connectors/kucoin",
    "spot-connectors/kraken",
    "spot-connectors/liquid",
    "spot-connectors/loopring",
    "spot-connectors/okex",
    "spot-connectors/probit",
    "spot-connectors/probit-korea",
    "spot-connectors/radar-relay",
  ],

  "Derivative Connectors": [
    "derivative-connectors/overview",
    "derivative-connectors/binance-futures",
    "derivative-connectors/dydx-perpetual",
  ],

  "Protocol Connectors": [
    "protocol-connectors/overview",
    "protocol-connectors/balancer",
    "protocol-connectors/perp-fi",
    "protocol-connectors/terra",
    "protocol-connectors/uniswap",
  ],
  "Hummingbot Gateway": ["gateway/overview", "gateway/installation"],
  Strategies: [
    "strategies/overview",
    "strategies/pure-market-making",
    "strategies/cross-exchange-market-making",
    "strategies/perpetual-market-making",
    "strategies/arbitrage",
    "strategies/celo-arb",
    "strategies/amm-arb",
    "strategies/liquidity-mining",
    "strategies/spot-perpetual-arb",
    "strategies/avellaneda-market-making",
    "strategies/uniswapv3-lp",
  ],
  "Advanced Market Making": [
    "strategies/adv-market-making",
    "strategies/order-levels",
    "strategies/inventory-skew",
    "strategies/filled-order-delay",
    "strategies/hanging-orders",
    "strategies/minimum-spread",
    "strategies/order-refresh-tolerance",
    "strategies/price-band",
    "strategies/ping-pong",
    "strategies/order-optimization",
    "strategies/add-transaction-costs",
    "strategies/external-price-source",
    "strategies/order-override",
    "strategies/max-order-age",
  ],
  Scripts: ["scripts/overview", "scripts/script-base"],
  "Developing Connectors": [
    "developer/overview",
    "developer/contributing",
    "developer/architecture",
    "developer/exchange-connector-tutorial",
    "developer/task1",
    "developer/task2",
    "developer/task3",
    "developer/task4",
    "developer/miscellaneous",
    "developer/debug&test",
  ],
  "Developing Strategies": [
    "developer/strategies-overview",
    "developer/contributing",
    "developer/pure-market-making",
    "developer/cross-exchange-market-making",
    "developer/twap",
    "developer/arbitrage",
    "developer/build-strategy",
  ],
  "Release Notes": [
    "release-notes/overview",
    "release-notes/0.39.0",
    "release-notes/0.38.1",
    "release-notes/0.38.0",
    "release-notes/0.37.1",
    "release-notes/0.37.0",
    "release-notes/0.36.0",
    "release-notes/0.35.0",
    "release-notes/0.34.0",
    "release-notes/0.33.1",
    "release-notes/0.33.0",
    "release-notes/0.32.0",
    "release-notes/0.31.0",
    "release-notes/0.30.0",
    "release-notes/0.29.0",
    "release-notes/0.28.1",
    "release-notes/0.28.0",
    "release-notes/0.27.0",
    "release-notes/0.26.1",
    "release-notes/0.26.0",
    "release-notes/0.25.0",
    "release-notes/0.24.1",
    "release-notes/0.24.0",
    "release-notes/0.23.0",
    "release-notes/0.22.0",
    "release-notes/0.21.0",
    "release-notes/0.20.0",
    "release-notes/0.19.1",
    "release-notes/0.19.0",
    "release-notes/0.18.1",
    "release-notes/0.18.0",
    "release-notes/0.17.1",
    "release-notes/0.17.0",
    "release-notes/0.16.0",
    "release-notes/0.15.0",
    "release-notes/0.14.0",
    "release-notes/0.13.0",
    "release-notes/0.12.1",
    "release-notes/0.12.0",
    "release-notes/0.11.1",
    "release-notes/0.11.0",
    "release-notes/0.10.1",
    "release-notes/0.10.0",
    "release-notes/0.9.1",
    "release-notes/0.9.0",
    "release-notes/0.8.1",
    "release-notes/0.8.0",
    "release-notes/0.7.0",
    "release-notes/0.6.0",
    "release-notes/0.5.1",
    "release-notes/0.5.0",
    "release-notes/0.4.0",
    "release-notes/0.3.1",
    "release-notes/0.3.0",
    "release-notes/0.2.0",
  ],
  Resources: [
    "resources/faq",
    "resources/glossary",
    "[Hummingbot YouTube](https://www.youtube.com/c/HummingbotChannel)",
    "[Hummingbot whitepaper](https://hummingbot.io/hummingbot.pdf)",
  ],
  Troubleshooting: [
    "troubleshooting/installation",
    "troubleshooting/client",
    "troubleshooting/strategy",
    "troubleshooting/connectors",
    "troubleshooting/gateway",
  ],
};

const navConfig = {
  "Hummingbot Docs": {
    url: "https://docs.hummingbot.io",
    description:
      "Documentation for Hummingbot, the open source framework that helps you build and run crypto trading bots",
    omitLandingPage: true,
  },
  "Hummingbot Miner Docs": {
    url: "https://docs.hummingbot.io/miner",
    description:
      "Documentation for Hummingbot Miner, the decentralized market making platform",
  },
  "Hummingbot Academy": {
    url: "https://hummingbot.io/academy",
    description:
      "Guides and tutorials that teach you how to use Hummingbot and Hummingbot Miner",
  },
};

const footerNavConfig = {
  "Hummingbot website": {
    href: "https://hummingbot.io",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  "Hummingbot Miner": {
    href: "https://miner.hummingbot.io",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  Blog: {
    href: "https://hummingbot.io/blog",
    target: "_blank",
    rel: "noopener noreferrer",
  },
};

module.exports = {
  siteMetadata: {
    headerButtonText: "Launch Hummingbot Miner",
    headerButtonLink: "https://miners.hummingbot.io/",
    discordUrl: "https://discord.hummingbot.io",
    siteName: "Hummingbot Docs",
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: "gatsby-theme-apollo-docs",
      options: {
        root: __dirname,
        siteName: "Hummingbot Client Documentation",
        description:
          "Documentation for Hummingbot, the open source framework that helps you build and run crypto trading bots",
        sidebarCategories,
        subtitle: "Hummingbot Docs",
        githubRepo: "coinalpha/hummingbot-docs",
        baseUrl: "https://docs.hummingbot.io",
        baseDir: "/",
        navConfig,
        footerNavConfig,
        twitterHandle: "hummingbot_io",
        youtubeUrl: "https://www.youtube.com/channel/UCxzzdEnDRbylLMWmaMjywOA",
        logoLink: "http://docs.hummingbot.io",
        /**
         * @todo Replace these two keys with own keys
         * @see https://github.com/apollographql/gatsby-theme-apollo/tree/master/packages/gatsby-theme-apollo-docs#algolia-configuration
         */
        algoliaApiKey: process.env.GATSBY_ALGOLIA_API_KEY,
        algoliaIndexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-katex`,
                  options: {
                    strict: `ignore`,
                  },
                },
              ],
            },
          },
        ],
        remarkPlugins: [remarkMath],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Hummingbot Docs",
        short_name: "Hummingbot",
        start_url: "/",
        background_color: "#0D999E",
        theme_color: "#0D999E",
        icon: "src/images/brand-logo.png",
      },
    },
  ],
};
