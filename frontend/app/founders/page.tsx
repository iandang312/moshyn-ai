"use client"
import TiltedCard from '@/components/TiltedCard';
import SplitText from '@/components/SplitText';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};


export default function FoundersPage() {
    return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', paddingTop: '20vh' }}>
        
        <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '3rem'}}>
            <SplitText
            text="MOSHYN MEN"
            className="text-4xl font-semibold text-center"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            />  
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
                <div>
                <TiltedCard
                    imageSrc="https://media.licdn.com/dms/image/v2/D5603AQGQD-Z9v1JJ-w/profile-displayphoto-scale_200_200/B56ZkDEexIHAAc-/0/1756693131814?e=1772064000&v=beta&t=T1hfbTgWKLy8fw8n2wG36P8tgNtYBR-cP0As_cS8xRk"
                    altText="Ian Dang - Software Engineer"
                    captionText="Ian Dang - Software Engineer"
                    containerHeight="250px"
                    containerWidth="250px"
                    imageHeight="250px"
                    imageWidth="250px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    displayOverlayContent={true}
                    overlayContent={<p className="tilted-card-demo-text">Jeffrey Chao</p> as unknown as undefined} 
                />
                </div>

                <div>
                <TiltedCard
                    imageSrc="https://media.licdn.com/dms/image/v2/D5603AQEph4KY6biZkQ/profile-displayphoto-crop_800_800/B56Zwa.W6eIcAI-/0/1769979080763?e=1772064000&v=beta&t=NmgoebbXrPeqYxr4A1yTHjmyadaAcGcfp6ssiELnnDg"
                    altText="Ian Dang - Software Engineer"
                    captionText="Ian Dang - Software Engineer"
                    containerHeight="250px"
                    containerWidth="250px"
                    imageHeight="250px"
                    imageWidth="250px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    displayOverlayContent={true}
                    overlayContent={<p className="tilted-card-demo-text">Ian Dang</p> as unknown as undefined} 
                />
                </div>

                <div>
                <TiltedCard
                    imageSrc="https://media.licdn.com/dms/image/v2/D4E03AQHmZ1887Us8AQ/profile-displayphoto-scale_200_200/B4EZwVa0sbIIAY-/0/1769885891960?e=1772064000&v=beta&t=N3nTr9wTQiv1gRY3fTP2N_ipLD2qWhILUu62pf7Ppdc"
                    altText="Ian Dang - Software Engineer"
                    captionText="Ian Dang - Software Engineer"
                    containerHeight="250px"
                    containerWidth="250px"
                    imageHeight="250px"
                    imageWidth="250px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    displayOverlayContent={true}
                    overlayContent={<p className="tilted-card-demo-text">Jacob Shin</p> as unknown as undefined} 
                />
                </div>
        </div>
    </div>
    );
}