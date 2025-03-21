document.addEventListener('DOMContentLoaded', function() {
    // Quiz data
    const quizData = [
        {
            question: "คุณรู้สึกอย่างไรเมื่อราคาขึ้นลงอย่างรวดเร็ว?",
            options: [
                { text: "สนุก ตื่นเต้น ชอบเสี่ยง", score: 1 },
                { text: "เครียด กังวล ไม่อยากเทรด", score: 2 },
                { text: "สงบ มองหาโอกาสที่แน่นอน", score: 3 }
            ]
        },
        {
            question: "คุณตั้งจุดหยุดขาดทุน (Stop Loss) ทุกครั้งหรือไม่?",
            options: [
                { text: "ทุกครั้ง", score: 3 },
                { text: "บางครั้ง", score: 2 },
                { text: "ไม่เคย", score: 1 }
            ]
        },
        {
            question: "คุณชอบเทรดแบบไหนมากที่สุด?",
            options: [
                { text: "แบบสั้นมาก (Scalping)", score: 1 },
                { text: "แบบถือภายในวัน (Day Trading)", score: 2 },
                { text: "แบบถือหลายวันหรือหลายสัปดาห์ (Swing Trading)", score: 3 }
            ]
        },
        {
            question: "ถ้าต้องถือออเดอร์ไว้นานๆ คุณรู้สึกอย่างไร?",
            options: [
                { text: "อยากปิดเร็วๆ ไม่สบายใจ", score: 1 },
                { text: "เฉยๆ รอได้", score: 2 },
                { text: "รู้สึกดี เพราะมีแผนที่ชัดเจน", score: 3 }
            ]
        },
        {
            question: "หากเทรดขาดทุนต่อเนื่อง คุณจะทำอย่างไร?",
            options: [
                { text: "หยุดพักและคิดทบทวน", score: 3 },
                { text: "พยายามเทรดต่อไปเพื่อเอาทุนคืน", score: 1 },
                { text: "วางแผนใหม่ และดูว่าทำอะไรผิดพลาด", score: 2 }
            ]
        },
        {
            question: "คุณคิดว่าความสำเร็จในการเทรดขึ้นอยู่กับอะไร?",
            options: [
                { text: "เทคนิคการเทรดที่ดี", score: 1 },
                { text: "ความคิดและระเบียบวินัย", score: 3 },
                { text: "ระบบหรือเครื่องมือที่ใช้", score: 2 }
            ]
        }
    ];

    // Results data
    const resultsData = {
        adventurer: {
            title: "นักผจญภัย (Adventurer) – เทรดเดอร์สายลุย กล้าเสี่ยง ไม่มีคำว่ารอ!",
            description: "คุณเป็นคนที่ชอบความตื่นเต้นและท้าทาย รักการเคลื่อนไหวที่รวดเร็วของตลาด และมักจะรู้สึกมีชีวิตชีวาเมื่อได้เทรดในสภาวะที่ราคาขึ้นลงผันผวนสูง คุณไม่ชอบรออะไรนานๆ และมักจะมองหาโอกาสเข้าทำกำไรอยู่ตลอดเวลา เพราะฉะนั้น Scalping หรือ News Trading อาจเป็นแนวทางที่เหมาะกับคุณ",
            icon: '<i class="fas fa-fire"></i>',
            traits: [
                "กล้าตัดสินใจไว ไม่ลังเล",
                "ชอบความรวดเร็วของตลาด",
                "รับความเสี่ยงได้ดี และพร้อมลุยทุกสถานการณ์",
                "สนุกกับการเทรดมากกว่าการรอจังหวะ"
            ],
            warnings: [
                "ต้องมีวินัยในการตั้ง Stop Loss เพราะความเร็วของตลาดอาจทำให้เสียหายหนัก",
                "ไม่ควร Overtrade หรือเทรดมากเกินไปเพราะอาจหมดพลังงานและสมาธิ",
                "ควรมีระบบบริหารเงินทุนที่ชัดเจน เพื่อป้องกันการขาดทุนรุนแรง"
            ],
            advice: "หากคุณเป็นนักผจญภัย คุณควรพัฒนากลยุทธ์ที่ช่วยให้คุณบริหารความเสี่ยงได้ดีขึ้น เช่น ใช้ระบบ Risk Management ที่เข้มงวด หรือปรับ Mindset ให้รู้จักหยุดเทรดเมื่อจำเป็น การเล่นเร็ว ไม่ได้หมายความว่าต้องเล่นโดยไม่มีแผน!"
        },
        planner: {
            title: "นักวางแผน (Planner) – เทรดเดอร์สายรอบคอบ วางแผนดี มีชัยไปกว่าครึ่ง!",
            description: "คุณเป็นคนที่ไม่ชอบความเสี่ยงโดยไม่จำเป็น และเชื่อว่าทุกอย่างต้องมีแผนที่รอบคอบก่อนลงมือทำ การเทรดของคุณไม่ได้ขึ้นอยู่กับอารมณ์หรือความรู้สึกชั่ววูบ แต่เป็นการวิเคราะห์ตลาดและรอจังหวะที่เหมาะสมเพื่อทำกำไร คุณเข้าใจว่าการเทรดที่ดีไม่ใช่แค่การเข้าเทรดให้ได้มากที่สุด แต่เป็นการเลือกเข้าให้ถูกที่ ถูกเวลา",
            icon: '<i class="fas fa-chart-line"></i>',
            traits: [
                "มีความอดทนสูง ไม่รีบเข้าเทรดโดยไม่มีเหตุผล",
                "รู้จักใช้เครื่องมือวิเคราะห์อย่างมีเหตุผล",
                "ชอบตั้งเป้าหมายที่ชัดเจนและทำตามแผนที่วางไว้",
                "คิดก่อนเทรดเสมอ และไม่ทำอะไรตามอารมณ์"
            ],
            warnings: [
                "อาจรอจังหวะนานเกินไป จนพลาดโอกาสทำกำไร",
                "อาจลังเลหรือวิเคราะห์มากเกินไป จนไม่กล้ากดเทรด",
                "ควรปรับตัวให้ไวขึ้นเมื่อตลาดเปลี่ยนแปลงอย่างรวดเร็ว"
            ],
            advice: "หากคุณเป็นนักวางแผน คุณควรพยายามสร้างความมั่นใจให้กับตัวเองเมื่อถึงเวลาตัดสินใจ อย่ากังวลเกินไปจนพลาดโอกาสดีๆ และฝึกฝนการใช้เครื่องมือวิเคราะห์ตลาดให้แม่นยำขึ้น จะช่วยให้คุณกลายเป็นเทรดเดอร์ที่แข็งแกร่งมากขึ้น!"
        },
        systematic: {
            title: "นักวางระบบ (Systematic) – เทรดเดอร์สายระเบียบ มีหลักการ และใช้เครื่องมือเป็น!",
            description: "คุณเป็นคนที่เชื่อในกระบวนการมากกว่าความรู้สึก การเทรดของคุณไม่ได้ขึ้นอยู่กับอารมณ์ แต่เป็นการทำตามระบบที่ผ่านการทดสอบมาแล้ว คุณชอบใช้เครื่องมือช่วยเทรด เช่น โรบอท (EA), อินดิเคเตอร์, หรือการตั้งออเดอร์แบบอัตโนมัติ เพราะคุณเชื่อว่าระบบสามารถลดความผิดพลาดที่เกิดจากอารมณ์ของมนุษย์ได้",
            icon: '<i class="fas fa-robot"></i>',
            traits: [
                "ชอบความเป็นระบบและทำตามกฎที่วางไว้",
                "เชื่อมั่นในข้อมูลและสถิติ มากกว่าความรู้สึก",
                "ใช้เครื่องมือช่วยวิเคราะห์ตลาด และทำตามกลยุทธ์ที่ทดสอบมาแล้ว",
                "ไม่ใช้อารมณ์เป็นตัวตัดสินใจ"
            ],
            warnings: [
                "ไม่ควรพึ่งพาโรบอทหรือเครื่องมือมากเกินไป ควรเข้าใจกลไกของตลาดเองด้วย",
                "บางครั้งระบบอาจไม่สามารถรับมือกับตลาดที่ผันผวนสูงได้",
                "ควรเรียนรู้วิธีปรับแต่งระบบเมื่อจำเป็น เพื่อให้เหมาะสมกับสภาพตลาดที่เปลี่ยนแปลง"
            ],
            advice: "หากคุณเป็นนักวางระบบ คุณควรศึกษาการปรับแต่งเครื่องมือที่คุณใช้ให้ลึกซึ้ง เพื่อให้คุณสามารถใช้ระบบที่เหมาะสมกับตัวเองที่สุด และอย่าลืมติดตามข่าวสารตลาดอยู่เสมอ เพื่อให้แน่ใจว่าระบบของคุณยังทำงานได้ดี"
        }
    };

    // DOM elements
    const landingPage = document.getElementById('landing-page');
    const quizPage = document.getElementById('quiz-page');
    const resultsPage = document.getElementById('results-page');
    const contactForm = document.getElementById('contact-form');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const questionContainer = document.getElementById('question-container');
    const progressBar = document.getElementById('progress-bar');
    const currentQuestionElement = document.getElementById('current-question');
    const totalQuestionsElement = document.getElementById('total-questions');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const restartBtn = document.getElementById('restart-btn');

    // State variables
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let userInfo = {};

    // Set total questions count
    totalQuestionsElement.textContent = quizData.length;

    // Event listeners
    startQuizBtn.addEventListener('click', startQuiz);
    prevBtn.addEventListener('click', showPreviousQuestion);
    nextBtn.addEventListener('click', showNextQuestion);
    submitBtn.addEventListener('click', showResults);
    restartBtn.addEventListener('click', restart);

    // Initialize the quiz
    function startQuiz() {
        // Get user info
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const lineId = document.getElementById('line-id').value;
        const phone = document.getElementById('phone').value;

        // Validate required fields
        if (!firstName || !lastName || !email || !lineId || !phone) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }

        // Validate phone number (10 digits)
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (ตัวเลข 10 หลัก)');
            return;
        }

        // Validate email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert('กรุณากรอกอีเมลให้ถูกต้อง');
            return;
        }

        // Save user info
        userInfo = { firstName, lastName, email, lineId, phone };

        // Initialize answers array
        userAnswers = Array(quizData.length).fill(null);

        // Show quiz page
        landingPage.style.display = 'none';
        quizPage.style.display = 'block';

        // Show first question
        showQuestion(0);
    }

    // Display a question
    function showQuestion(index) {
        // Update current question index
        currentQuestionIndex = index;
        
        // Update UI elements
        currentQuestionElement.textContent = index + 1;
        updateProgressBar();
        
        // Enable/disable navigation buttons
        prevBtn.disabled = index === 0;
        
        if (index === quizData.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'block';
        } else {
            nextBtn.style.display = 'block';
            submitBtn.style.display = 'none';
        }

        // Create question markup
        const question = quizData[index];
        const questionHTML = `
            <div class="question">
                <h3>${index + 1}. ${question.question}</h3>
                <div class="options">
                    ${question.options.map((option, i) => `
                        <label class="option ${userAnswers[index] === i ? 'selected' : ''}">
                            <input type="radio" name="q${index}" value="${i}" ${userAnswers[index] === i ? 'checked' : ''}>
                            ${option.text}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;

        // Insert question into DOM
        questionContainer.innerHTML = questionHTML;

        // Add event listeners to options
        const optionElements = document.querySelectorAll('.option');
        optionElements.forEach((option, i) => {
            option.addEventListener('click', () => {
                // Update UI
                optionElements.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                
                // Store answer
                userAnswers[currentQuestionIndex] = i;
                
                // Enable next button if an option is selected
                nextBtn.disabled = false;
                submitBtn.disabled = false;
            });
        });

        // Disable next/submit buttons if no option is selected
        nextBtn.disabled = userAnswers[index] === null;
        if (submitBtn.style.display === 'block') {
            submitBtn.disabled = userAnswers[index] === null;
        }
    }

    // Show next question
    function showNextQuestion() {
        if (currentQuestionIndex < quizData.length - 1) {
            showQuestion(currentQuestionIndex + 1);
        }
    }

    // Show previous question
    function showPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            showQuestion(currentQuestionIndex - 1);
        }
    }

    // Update progress bar
    function updateProgressBar() {
        const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Calculate quiz result
    function calculateResult() {
        // Calculate total score
        let totalScore = 0;
        userAnswers.forEach((answerIndex, questionIndex) => {
            if (answerIndex !== null) {
                totalScore += quizData[questionIndex].options[answerIndex].score;
            }
        });

        // Determine result category
        let resultType;
        if (totalScore >= 6 && totalScore <= 8) {
            resultType = 'adventurer';
        } else if (totalScore >= 9 && totalScore <= 13) {
            resultType = 'planner';
        } else {
            resultType = 'systematic';
        }

        return {
            score: totalScore,
            type: resultType
        };
    }

    // Show quiz results
    function showResults() {
        // Make sure all questions are answered
        const unansweredQuestions = userAnswers.findIndex(answer => answer === null);
        if (unansweredQuestions !== -1) {
            alert(`กรุณาตอบคำถามข้อที่ ${unansweredQuestions + 1}`);
            showQuestion(unansweredQuestions);
            return;
        }

        // Calculate result
        const result = calculateResult();
        const resultData = resultsData[result.type];

        // Update results page elements
        document.getElementById('result-icon').innerHTML = resultData.icon;
        document.getElementById('result-title').textContent = resultData.title;
        document.getElementById('result-description').textContent = resultData.description;
        
        // Update traits list
        const traitsList = document.getElementById('result-traits');
        traitsList.innerHTML = resultData.traits.map(trait => `<li>${trait}</li>`).join('');
        
        // Update warnings list
        const warningsList = document.getElementById('result-warnings');
        warningsList.innerHTML = resultData.warnings.map(warning => `<li>${warning}</li>`).join('');
        
        // Update advice
        document.getElementById('result-advice').textContent = resultData.advice;

        // Show results page
        quizPage.style.display = 'none';
        resultsPage.style.display = 'block';

        // Prepare data for submission
        const quizResult = {
            userInfo: userInfo,
            answers: userAnswers.map((answerIndex, questionIndex) => {
                return {
                    question: quizData[questionIndex].question,
                    answer: quizData[questionIndex].options[answerIndex].text,
                    score: quizData[questionIndex].options[answerIndex].score
                };
            }),
            result: {
                score: result.score,
                type: result.type,
                title: resultData.title
            },
            timestamp: new Date().toISOString()
        };

        // Send data to Google Script
        sendDataToGoogleScript(quizResult);
        
        // Store result in localStorage as well
        localStorage.setItem('traderQuizResult', JSON.stringify(quizResult));
    }

    // Function to send data to Google Script
    function sendDataToGoogleScript(data) {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwzsHAkUwQGTuWHQ9Mm5AFlbbslHG-BE_8sVVHKfpt9ZgVErul6AGpCWr_g1yEy2U4mNQ/exec';
        
        // Create FormData object
        const formData = new FormData();
        
        // Add user info
        formData.append('firstName', data.userInfo.firstName);
        formData.append('lastName', data.userInfo.lastName);
        formData.append('email', data.userInfo.email);
        formData.append('lineId', data.userInfo.lineId);
        formData.append('phone', data.userInfo.phone);
        
        // Add result info
        formData.append('score', data.result.score);
        formData.append('resultType', data.result.type);
        formData.append('resultTitle', data.result.title);
        
        // Add JSON data of complete results
        formData.append('fullData', JSON.stringify(data));

        // Send data using fetch
        fetch(scriptURL, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            console.log('Success!', response);
        })
        .catch(error => {
            console.error('Error!', error.message);
        });
    }

    // Restart quiz
    function restart() {
        // Reset state
        currentQuestionIndex = 0;
        userAnswers = [];
        
        // Show landing page
        resultsPage.style.display = 'none';
        quizPage.style.display = 'none';
        landingPage.style.display = 'block';
        
        // Clear form
        contactForm.reset();
    }

    // Initialize option click handlers on the page
    function initOptionHandlers() {
        document.addEventListener('click', function(e) {
            if (e.target.closest('.option')) {
                const option = e.target.closest('.option');
                const radio = option.querySelector('input[type="radio"]');
                
                if (radio) {
                    radio.checked = true;
                    
                    // Trigger a click event on the radio button
                    const event = new Event('click');
                    radio.dispatchEvent(event);
                }
            }
        });
    }

    // Initialize
    initOptionHandlers();
});
