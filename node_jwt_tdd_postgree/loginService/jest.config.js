module.exports = {
    // Para assim que ocorrer a primeira falha
    bail: true,
    clearMocks: true,
    testEnvironment: "node",
    //Testa apenas os arquivos que terminam com test.js
    testMatch:[
        "**/tests/**/*.test.js?(x)"
    ],

    // transform: {'^.+\\.(js|jsx)?$': 'babel-jest'},
    
    verbose: true,

    // Estatisticas dos testes
    collectCoverage: true,

    collectCoverageFrom: ["src/**"],

    coverageDirectory: "tests/coverage",
  };