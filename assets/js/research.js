/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Covid-19 Dataset: Worldwide spread log including countries first case and first death",
    authors:
      "Hasmot Ali, Md Fahad Hossain, Md Mehedi Hasan, Sheikh Abujar",
    conferences:
      "Data in brief 32",
    researchYr: 2020,
    citebox: "popup1",
    image: "assets/images/research-page/elsevier.jpg",
    citation: {
      vancouver:
        "Hasmot Ali, Md. Fahad Hossain, Md. Mehedi Hasan, Sheikh Abujar, Covid-19 Dataset: Worldwide spread log including countries first case and first death, Data in Brief, Volume 32, 2020, 106173, ISSN 2352-3409, https://doi.org/10.1016/j.dib.2020.106173.",
    },
    abstract:
      "The article represents coronavirus spread log history. The duration, coronavirus takes to spread from one country to another country, could be seen in this dataset and could predicted the same for future pandemics through this dataset. It is highly dependent on the cabalistic number of variables that is the main navel of these datasets. Information for this dataset is collected from trusted websites, local and international popular newspapers. This coronavirus dataset not only help to track the spreading route of coronavirus but also can be used for predicting the possible spreading route of similar future pandemics. This dataset consists of 186 countries' useful data related to COVID-19 pandemic from November 17, 2019, to May 16, 2020, with 8 unique variables that provide the information of the nature of the spread of COVID-19. The datasets mainly focus on two major fields, first one is First Case which consists of information of Date of First Case(s), Number of confirm Case(s) at First Day, Age of the patient(s) of First Case, Last Visited Country and the other one First Death information consist of Date of First Death and Age of the Patient who died first for every Country mentioning corresponding Continent.This dataset also can perform a bunch of predictions using Machine Learning applications, like -how fast the virus is spreading, affect rate, death rate, death rate and able to represent comparison between other pandemics. Using this dataset, any similar pandemic spreadness could be predicted earlier and necessary precaution measures could be taken.",
    absbox: "absPopup1",
  },

  {
    title: "Preprocessing of Continuous Bengali Speech for Feature Extraction",
    authors:
      "Md Mehedi Hasan, Hasmot Ali, Md Fahad Hossain, Sheikh Abujar",
    conferences:
      "2020 11th International Conference on Computing, Communication and Networking Technologies (ICCCNT)",
    researchYr: 2020,
    citebox: "popup2",
    image: "assets/images/research-page/ieee.jpg",
    citation: {
      vancouver:
        "M. M. Hasan, H. Ali, M. F. Hossain and S. Abujar, \"Preprocessing of Continuous Bengali Speech for Feature Extraction,\" 2020 11th International Conference on Computing, Communication and Networking Technologies (ICCCNT), 2020, pp. 1-4, doi: 10.1109/ICCCNT49239.2020.9225469.",
    },
    abstract:
      "As Voice is the most suitable form of communication, voice-based applications are playing a vital role in modern technology for the last few decades. It is not only the trend of modern and efficient technology but also a new shift of information and technology paradigm. Several research works have been completed on voice-based applications because it has more practical application than any other form of communication. For almost every application, voice signals need to be preprocessed before using it as the input signal. Preprocessing of any data improves the performance of applications. A preprocessing method for feature extraction of continuous Bangla voice has been proposed in this paper. In this method the signal is preprocessed in several steps. In the first step, the noise has been reduced from the signal. Then after balancing the frequency applying pre-emphasis, framing is applied which splits the whole signal into some frames. After that a hamming window and normalization are applied to improve the spectrum and SNR of the preprocessed signal. By following these steps, a clear voice signal, free from noise and unnecessary frequencies has been retrieved.",
    absbox: "absPopup2",
  },

  {
    title:
      "A Machine Learning Approach to Recognize Speakers Region of the United Kingdom from Continuous Speech Based on Accent Classification",
    authors: "Md Fahad Hossain, Md Mehedi Hasan, Hasmot Ali, Md Rahmatul Kabir Rasel Sarker, Md Toukirul Hassan",
    conferences:
      "2020 11th International Conference on Electrical and Computer Engineering (ICECE)",
    researchYr: 2020,
    citebox: "popup3",
    image: "assets/images/research-page/ieee.jpg",
    citation: {
      vancouver:
        "M. F. Hossain, M. M. Hasan, H. Ali, M. R. K. R. Sarker and M. T. Hassan, \"A Machine Learning Approach to Recognize Speakers Region of the United Kingdom from Continuous Speech Based on Accent Classification,\" 2020 11th International Conference on Electrical and Computer Engineering (ICECE), 2020, pp. 210-213, doi: 10.1109/ICECE51571.2020.9393038.",
    },
    abstract:
      "Speech is one of the primary modes of communication with a lot of identical features for measuring performance and behavior of human voice. Accent is an important element and can play a vital role in spoken language. In this paper, we propose a region detection approach of UK citizens by recognizing their accent from continuous speech. The ultimate goal of this paper is to detect the region of UK citizens from which region among Ireland, Midland, Northern England, Scotland, Southern England and Wales he/she belongs using continues speech. Firstly, we use Mel Frequency Cepstral Coefficient (MFCC) for extracting the feature from continuous speech. Then we applied several Machine Learning classifiers to train and test our model. After evaluating performance we find that k-Nearest Neighbors (k-NN), Support Vector Machine (SVM), and Random Forest classifier provide comparatively better accuracy than others. We also perform a comparative analysis of these three algorithms. We got the best accuracy of 98.48% by applying k-NN classifier.",
    absbox: "absPopup3",
  },

  {
    title:
      "A Continuous Word Segmentation of Bengali Noisy Speech",
    authors:
      "Md Fahad Hossain, Md Mehedi Hasan, Hasmot Ali, Sheikh Abujar",
    conferences:
      "3rd International Conference on Computing & Communication (IC3-2020)",
    researchYr: 2020,
    citebox: "popup4",
    image: "assets/images/research-page/springer.png",
    citation: {
      vancouver:
        "Fahad hossain, M., Mehedi Hasan, M., Ali, H., Abujar, S. (2021). A Continuous Word Segmentation of Bengali Noisy Speech. In: Borah, S., Pradhan, R., Dey, N., Gupta, P. (eds) Soft Computing Techniques and Applications. Advances in Intelligent Systems and Computing, vol 1248. Springer, Singapore. https://doi.org/10.1007/978-981-15-7394-1_48.",
    },
    abstract:
      "Human voice is an important concern of efficient and modern communication in the era of Alexa, Siri, or Google Assistance. Working with voice or speech is going to be easy by preprocessing the unwanted entities when real speech data contains a lot of noise or continuous delivery of a speech. Working with Bangla language is also a concern of enriching the scope of efficient communication over Bangla language. This paper presented a method to reduce noise from speech data collected from a random noisy place, and segmentation of word from continuous Bangla voice. By filtering the threshold of noise with fast Fourier transform (FFT) of audio frequency signal for reduction of noise and compared each chunk of audio signal with minimum dBFS value to separate silent period and non-silent period and on each silent period, segment the signal for word segmentation.",
    absbox: "absPopup4",
  },

  {
    title: "FishNet: Fish Classification using Convolutional Neural Network",
    authors: "Shumaiya Akter Shammi, Sajal Das, Mehedi Hasan, Sheak Rashed Haider Noori",
    conferences:
      "2021 12th International Conference on Computing Communication and Networking Technologies (ICCCNT)",
    researchYr: 2021,
    citebox: "popup5",
    image: "assets/images/research-page/ieee.jpg",
    citation: {
      vancouver:
        "S. A. Shammi, S. Das, M. Hasan and S. R. Haider Noori, \"FishNet: Fish Classification using Convolutional Neural Network,\" 2021 12th International Conference on Computing Communication and Networking Technologies (ICCCNT), 2021, pp. 1-5, doi: 10.1109/ICCCNT51525.2021.9579550.",
    },
    abstract:
      "Our main motive of this paper is to classify fish for people. Because many of us don't know the class of fish, name of fish. For that reason, we don't know the percentage of vitamins and nutritions of a fish properly and cannot understand which fish we should eat more. And this fish classification will also help the people who work in marine fishing and it is very important to know the classification of fish for them. Here we have identified six types of fish using the traditional algorithm along with Convolutional Neural Network (CNN) to classify fish. In traditional algorithms, we have implemented some remarkable and performable Machine Learning Algorithms. Convolutional Neural Network is considered as perfect and suitable for classification. That's why we use CNN to classify fish on our model. From various kinds of traditional algorithms, we got the best accuracy from Support Vector Machine(SVM) where the accuracy is 63.93% and our classification accuracy using Convolutional Neural Network is 88.96%.",
    absbox: "absPopup5",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
