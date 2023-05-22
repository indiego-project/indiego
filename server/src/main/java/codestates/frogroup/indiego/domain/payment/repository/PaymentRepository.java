package codestates.frogroup.indiego.domain.payment.repository;

import codestates.frogroup.indiego.domain.payment.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
    Optional<Payment> findByOrderId(String orderId);
    Optional<Payment> findByPaymentKeyAndCustomer_Email(String paymentKey, String email);
}
