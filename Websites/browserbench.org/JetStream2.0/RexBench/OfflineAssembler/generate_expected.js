/*
 * Copyright (C) 2017 Apple Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
 */

"use strict";

/* Use this file to generate the expected output with the command:
 *     $ jsc registers.js instructions.js ast.js parser.js file.js LowLevelInterpreter.js LowLevelInterpreter32_64.js LowLevelInterpreter64.js InitBytecodes.js generate_expected.js > expected.js
 */

resetAST();
let ast = parse("LowLevelInterpreter.asm");

let astDumpedAsLines = ast.dump().split("\n");

print("/*");
print(" * DO NOT EDIT THIS FILE, it is autogenerated.");
print(" */");
print("");
print("\"use strict\";");
print("");
print("let expectedASTDumpedAsLines = [");

let lineNumber = 1;
let totalLines = astDumpedAsLines.length;

for (let line of astDumpedAsLines) {
    print("    \"" + line.replace(/\"/g, "\\\"") + (lineNumber < totalLines ? "\"," : "\""));
    lineNumber++;
}

print("];");
